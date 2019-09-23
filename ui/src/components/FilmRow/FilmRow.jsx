import React from 'react';
import './FilmRow.scss';


export default class FilmRow extends React.Component {

    parseMovieTitle(movie_title) {
        return movie_title.replace(/_/g, " ")
    }

    render() {
        return (
            <div className="film-row"> {this.parseMovieTitle(this.props.film.movie_title)}
            </div>
        );
    }
}   

