from __future__ import absolute_import, print_function
import os
import inspect
from flask import Flask
from flask_restful import Api
from flask_migrate import Migrate
from .db import db
from flask_restful import Resource
from threading import Lock
from flask_cors import CORS

api = Api()
migrate = Migrate()
lock   = Lock()
db_uri = "sqlite:///" + os.path.realpath(os.path.join(inspect.getfile(inspect.currentframe()), '..', '..', 'data', 'db.sqlite')) + '?timeout=30'
default_config = {
    'DEBUG':                          True,
    'SQLALCHEMY_DATABASE_URI':        db_uri,
    'SQLALCHEMY_TRACK_MODIFICATIONS': False
}


def _add_resources(api):
    from .resources.movies import AllMoviesResource, MovieResource


    api.add_resource(AllMoviesResource, '/movies')
    api.add_resource(MovieResource,     '/movie/<string:movie_title>')


def create_app(wsgi=False, collect_transactions=True):
    global api
    app = Flask(__name__)
    CORS(app)
    app.config.update(default_config)
    api = Api(app)
    db.init_app(app)
    migrate.init_app(app, db)
    _add_resources(api)
    return app
