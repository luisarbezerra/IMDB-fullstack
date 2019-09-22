from flask import request
from flask_restful import Resource, marshal, fields
from ..models.movie import Movie

movie_fields = {
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


movies_fields = {
    'movies': fields.List(fields.Nested(movie_fields))
}

class MoviesResource(Resource):

    def get(self):
        movies = Movie.query.all()
        return marshal({'movies': movies}, movies_fields)