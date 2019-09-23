from flask import request
from flask_restful import Resource, marshal, fields
from ..models.movie import Movie


languages_fields = {
    'languages': fields.List(fields.String)
}

class LanguagesResource(Resource):

    def get(self):
        movies = Movie.query.all()
        all_languages = []
        for movie in movies:
            if movie.language:
                if movie.language in all_languages:
                    continue
                else:
                    all_languages.append(movie.language)
        return marshal({'languages': all_languages}, languages_fields)
