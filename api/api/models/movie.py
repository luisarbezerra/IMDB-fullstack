from ..app import db


class Movie(db.Model):
    __tablename__           = 'movies'

    movie_title             = db.Column(db.String(128), primary_key=True)
    director_name           = db.Column(db.String(128))
    genres                  = db.Column(db.String(128))
    plot_keywords           = db.Column(db.String(256))
    movie_imdb_link         = db.Column(db.String(256))
    language                = db.Column(db.String(256))
    country                 = db.Column(db.String(256))
    title_year              = db.Column(db.Integer)
    imdb_score              = db.Column(db.Float)
