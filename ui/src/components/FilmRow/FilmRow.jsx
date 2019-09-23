import React from 'react';
import './FilmRow.scss';


export default class FilmRow extends React.Component {

    render() {
        return (
            <div className="film-row"> {this.props.film.movie_title}
            </div>
        );
    }
}   

