import os
import sys
import pandas as pd 
import unicodedata

from api.app          import create_app
from api.models.movie import Movie
from api.db           import db

def load_csv(filename):

  movies = pd.read_csv(filename, encoding='utf-8')
  for index, row in movies.iterrows():
    item_exists = Movie.query.filter(Movie.movie_title.contains(unicodedata.normalize('NFKC', row['movie_title']))).first()

    if item_exists is None:
      movie = {
        'movie_title':     unicodedata.normalize('NFKC', row['movie_title']),
        'director_name':   row['director_name'],
        'genres':          row['genres'],
        'plot_keywords':   row['plot_keywords'],
        'movie_imdb_link': row['movie_imdb_link'],
        'language':        row['language'],
        'country':         row['country'],
        'title_year':      row['title_year'],
        'imdb_score':      row['imdb_score'],
      }
      new_movie = Movie(**movie)
      db.session.add(new_movie)
    else:
      continue

  db.session.commit()


if __name__ == '__main__':
  app = create_app()
  with app.app_context():
    load_csv('csv_file/movie_metadata.csv') 
