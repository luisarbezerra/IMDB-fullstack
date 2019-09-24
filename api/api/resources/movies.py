from flask import request
from flask_restful import Resource, marshal, fields
from ..models.movie import Movie

all_movie_fields = {
    'movie_title':      fields.String,
    'genres':           fields.String,
    'title_year':       fields.Integer,
    'language':         fields.String,
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
    'title_year':       fields.String,
    'imdb_score':       fields.Float
}


movie_fields = {
    'movie': fields.Nested(single_movie_fields)
}


class AllMoviesResource(Resource):

    def get(self, page_num):
        get_args = request.args.to_dict()
        movies = Movie.query

        if 'substring' in get_args:
            movies = movies.filter(Movie.movie_title.contains(get_args['substring']))
        if 'year' in get_args:
            movies = movies.filter(Movie.title_year.contains(int(get_args['year'])))
        if 'genre' in get_args:
            movies = movies.filter(Movie.genres.contains(get_args['genres']))
        if 'language' in get_args:
            movies = movies.filter(Movie.language.contains(get_args['language']))
        
        movies = movies.paginate(page=page_num, error_out=False, max_per_page=15).items
        return marshal({'movies': movies}, movies_fields)


class MovieResource(Resource):

    def get(self, movie_title):
        if 'hashreplaced' in movie_title:
            movie_title = movie_title.replace("hashreplaced", "#")
        movie = Movie.query.filter_by(movie_title=movie_title).first()
        return marshal({'movie': movie}, movie_fields)