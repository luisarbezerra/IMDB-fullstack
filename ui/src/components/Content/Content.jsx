import React from 'react';
import { ListGroup, Form, Dropdown, DropdownButton, Button } from 'react-bootstrap'
import FilmModal from '../FilmModal'

import './Content.scss';

import FilmRow from '../FilmRow'

export default class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            genre: '',
            year: '',
            language: '', 
        }
    }
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


    renderFilter = (type, filter) => {
        return <Dropdown.Item href="" onSelect={() => this.handleFilterClick(type, filter)}>{filter}</Dropdown.Item>
    }


    renderFilters = (type, filter) => {
        return filter.map((filter) => this.renderFilter(type, filter))
    }

    pageNext = () => {
        if(this.props.films.movies.length === 15 && !this.props.fetching) {
            let num = this.props.page_num
            this.props.nextPage(this.props.page_num);
            this.props.fetchFilms(num+1, {genre:this.state.genre, year:this.state.year, language:this.state.language})
        };
    }

    pagePrev = () => {
        if (this.props.page_num >= 2 && !this.props.fetching) {
            let num = this.props.page_num
            this.props.prevPage(this.props.page_num);
            this.props.fetchFilms(num-1, {genre:this.state.genre, year:this.state.year, language:this.state.language});
        }
    }

    handleFilterAllClick = (type) => {
        this.props.firstPage()
        this.setState({[type]: []},() => this.props.fetchFilms(this.props.page_num, {genre:this.state.genre, year:this.state.year, language:this.state.language}))
    }


    handleFilterClick = (type, filter) => {
        this.setState({[type]: filter}, () => this.props.fetchFilms(this.props.page_num, {genre:this.state.genre, year:this.state.year, language:this.state.language}))     
        
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
                        <Dropdown.Item href="" onSelect={() => this.handleFilterAllClick('genre')}>All</Dropdown.Item>
                        {this.props.genres !== null && this.renderFilters('genre', this.props.genres.genres)}
                    </DropdownButton>

                    <DropdownButton id="dropdown2" className="filter" title="Anos">
                        <Dropdown.Item href="" onSelect={() => this.handleFilterAllClick('year')}>All</Dropdown.Item>
                        {this.props.years !== null && this.renderFilters('year', this.props.years.years)}
                    </DropdownButton>

                    <DropdownButton id="dropdown3" className="filter" title="Linguagem">
                        <Dropdown.Item href="" onSelect={() => this.handleFilterAllClick('language')}>All</Dropdown.Item>
                        {this.props.languages !== null && this.renderFilters('language', this.props.languages.languages)}
                    </DropdownButton>
                </div>

                <ListGroup className='film-list' as="ul">
                    { this.props.films !== null && this.renderFilmRows() }
                </ListGroup>
                <FilmModal />

                <div className='buttons-pag'>
                    <Button className='button-pag' onClick={() => this.pagePrev()}>‹</Button>
                    <Button className='button-pag' onClick={() => this.pageNext()}>›</Button>
                </div>

            </div>
        );
    }
}   

