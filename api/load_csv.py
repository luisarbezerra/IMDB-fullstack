import sys
from api.app import create_app
from api.models.user import Movies
from api.db import db

def load_csv(filename):
# maquete do que será feito para enviar dados do csv pro bd
  rows = csv.parse(filename)
  for row in rows:
    key = Movies(row)
    db.session.add(key)
  db.session.commit()


if __name__ == '__main__':
  if len(sys.argv) != 2:
    print('Usage: {} CSV_FILENAME'.format(sys.argv[0]))
    sys.exit(1)

  app = create_app()
  with app.app_context():
    load_csv(sys.argv[1]) 
