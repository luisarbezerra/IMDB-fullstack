from flask import request
from flask_restful import Resource, marshal, fields
from ..models.movie import Movie


genres_fields = {
    'genres': fields.List(fields.String)
}

class GenresResource(Resource):

    def get(self):
        movies = Movie.query.all()
        all_genres = []
        for movie in movies:
            for genre in movie.genres.split('|'):
                if genre in all_genres:
                    continue
                else:
                    all_genres.append(genre)
        all_genres.sort()
        return marshal({'genres': all_genres}, genres_fields)
