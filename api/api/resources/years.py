from flask import request
from flask_restful import Resource, marshal, fields
from ..models.movie import Movie


years_fields = {
    'years': fields.List(fields.String)
}

class YearsResource(Resource):

    def get(self):
        movies = Movie.query.all()
        all_years = []
        for movie in movies:
            if movie.title_year:
                if movie.title_year in all_years:
                    continue
                else:
                    all_years.append(movie.title_year)
        return marshal({'years': all_years}, years_fields)