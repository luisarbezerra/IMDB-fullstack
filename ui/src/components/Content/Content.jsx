import React from 'react';
import './Content.scss';

import FilmRow from '../FilmRow'

export default class Content extends React.Component {
    componentDidMount () {
        this.props.fetchFilms(this.props.page_num);
    }


    renderFilmRow = (film) => {
        return <FilmRow key={film.movie_title} film={film}/>
    }


    renderFilmRows = () => {
        const films = this.props.films.movies;
        return films.map(this.renderFilmRow);
    }
    

    render() {
        return (
            <div className="content" id="content">
                { this.props.films !== null && this.renderFilmRows() }
            </div>
        );
    }
}   

