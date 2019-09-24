import React from 'react';
import { ListGroup } from 'react-bootstrap'

import './FilmRow.scss';


export default class FilmRow extends React.Component {
    
    parseMovieTitle(movie_title) {
        return movie_title.replace(/_/g, " ")
    }

    openModal = () => {
        this.props.fetchSingleFilm(this.props.film.movie_title)
        this.props.showModal(this.props.film.movie_title)
    }

    render() {
        return (
            <ListGroup.Item action onClick={() => this.openModal()}>
                <span className='info-type'>{this.parseMovieTitle(this.props.film.movie_title)}</span>
                <span className="row-info">
                    <span className='info-type'>Nota IMDB:</span> {this.props.film.imdb_score ||'Indisponível'} -  
                    <span className='info-type'> Gêneros</span>: {this.props.film.genres.replace(/\|/g, ", ") ||'Indisponível'} - 
                    <span className='info-type'> Ano</span>: {this.props.film.title_year ||'Indisponível'}
                </span>
            </ListGroup.Item>
        );
    }
}   

