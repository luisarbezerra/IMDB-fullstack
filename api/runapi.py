import os
import gunicorn.app.base
from gunicorn.util import import_app
from gunicorn.six import iteritems


class GunicornApplication(gunicorn.app.base.BaseApplication):
    def __init__(self, options=None):
        self.options = options or {}
        super(GunicornApplication, self).__init__()

    def load_config(self):
        config = dict([(key, value) for key, value in iteritems(self.options)
                      if key in self.cfg.settings and value is not None])
        for key, value in iteritems(config):
            self.cfg.set(key.lower(), value)

    def load(self):
        return import_app('api.app:create_app(wsgi=True,collect_transactions=True)')


def run():
    options = {
        'bind':      '0.0.0.0:5000',
        'threads':   4,
        'accesslog': '-',
        'reload':    True,
        'workers':   2 
    }
    GunicornApplication(options).run()


if __name__ == '__main__':
    run()
else:
    from api.app import create_app
    app = create_app(collect_transactions=False)
