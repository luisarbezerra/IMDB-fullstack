import React from 'react';
import { ListGroup, Form, Dropdown, DropdownButton } from 'react-bootstrap'
import FilmModal from '../FilmModal'

import './Content.scss';

import FilmRow from '../FilmRow'

export default class Content extends React.Component {
    componentDidMount () {
        this.props.fetchFilms(this.props.page_num);
        this.props.fetchFilters();
    }


    renderFilmRow = (film) => {
        return <FilmRow key={film.movie_title} film={film} showModal={this.props.showModal}/>
    }


    renderFilmRows = () => {
        const films = this.props.films.movies;
        return films.map(this.renderFilmRow);
    }


    renderFilter = (filter) => {
        return <Dropdown.Item href="" onClick={this.handleFilterClick}>{filter}</Dropdown.Item>
    }

    renderFilters = (filter) => {
        return filter.map(this.renderFilter)
    }

    render() {
        return (
            <div className="content" id="content">

                <Form>
                    <Form.Group controlId="search-movie">
                        <Form.Control type="text" placeholder="Digite o Nome do Filme..." />
                    </Form.Group>
                </Form>

                <div className='filters'>
                    <DropdownButton id="dropdown1" className="filter" title="Gêneros">
                        <Dropdown.Item href="" onClick={this.handleFilterAllClick}>All</Dropdown.Item>
                        {this.props.genres !== null && this.renderFilters(this.props.genres.genres)}
                    </DropdownButton>

                    <DropdownButton id="dropdown2" className="filter" title="Anos">
                        <Dropdown.Item href="" onClick={this.handleFilterAllClick}>All</Dropdown.Item>
                        {this.props.years !== null && this.renderFilters(this.props.years.years)}
                    </DropdownButton>

                    <DropdownButton id="dropdown3" className="filter" title="Linguagem">
                        <Dropdown.Item href="" onClick={this.handleFilterAllClick}>All</Dropdown.Item>
                        {this.props.languages !== null && this.renderFilters(this.props.languages.languages)}
                    </DropdownButton>
                </div>

                <ListGroup className='film-list' as="ul">
                    { this.props.films !== null && this.renderFilmRows() }
                </ListGroup>
                <FilmModal />
            </div>
        );
    }
}   

