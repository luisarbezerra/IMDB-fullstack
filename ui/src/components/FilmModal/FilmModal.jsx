import React from 'react';
import { Modal, Button } from 'react-bootstrap'

import './FilmModal.scss'

export default class FilmModal extends React.Component  {
        
    parseMovieTitle(movie_title) {
        return movie_title.replace(/_/g, " ")
    }

    parseCategories(category) {
        return category.replace(/\|/g, ", ")
    }
    
    renderFilmInfo () {
        const film = this.props.modal_info.movie
        return(
            <div className="modal-div-content">
                <span>Diretor: {film.director_name ||'Indisponível'}</span>
                <span>Duração: {film.duration ||'Indisponível'}</span>
                <span>Gênero: {film.genres? this.parseCategories(film.genres):'Indisponível'}</span>
                <span>Palavras-chave: {film.plot_keywords? this.parseCategories(film.plot_keywords):'Indisponível'}</span>
                <span>Língua: {film.language ||'Indisponível'}</span>
                <span>País: {film.country ||'Indisponível'}</span>
                <span>Ano: {film.title_year ||'Indisponível'}</span>
                <span>Link IMDB: {<a href={film.movie_imdb_link}>{film.movie_imdb_link}</a> ||'Indisponível'}</span>
                <span>Nota IMDB: {film.imdb_score ||'Indisponível'}</span>
            </div>
        )
    }

    render() {
        return (
            <div className={ this.props.show_modal ? "modal display-block" : "modal display-none"}>
                <Modal show={this.props.show_modal} onHide={() => this.props.hideModal()}>
                    <Modal.Header closeButton>
                    <Modal.Title>{this.props.modal_film && this.parseMovieTitle(this.props.modal_film)}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.modal_info !== null && this.renderFilmInfo()}</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.props.hideModal()}>
                        Fechar
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
