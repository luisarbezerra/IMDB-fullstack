from flask import request
from flask_restful import Resource, marshal, fields
from ..models.movie import Movie

all_movie_fields = {
    'movie_title':      fields.String,
    'genres':           fields.String,
    'title_year ':      fields.String,
    'imdb_score':       fields.Float
}


movies_fields = {
    'movies': fields.List(fields.Nested(all_movie_fields))
}


single_movie_fields = {
    'movie_title':      fields.String,
    'director_name':    fields.String,
    'duration':         fields.String,
    'genres':           fields.String,
    'plot_keywords':    fields.String,
    'movie_imdb_link':  fields.String,
    'language':         fields.String,
    'country':          fields.String,
    'title_year ':      fields.String,
    'imdb_score':       fields.Float
}


movie_fields = {
    'movie': fields.List(fields.Nested(single_movie_fields))
}


class AllMoviesResource(Resource):

    def get(self):
        movies = Movie.query.all()
        return marshal({'movies': movies}, movies_fields)


class MovieResource(Resource):

    def get(self, movie_title):
        movie = Movie.query.filter_by(movie_title=movie_title).first()
        return marshal({'movie': movie}, movie_fields)