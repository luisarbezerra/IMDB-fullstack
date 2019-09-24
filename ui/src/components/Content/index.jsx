import { connect } from 'react-redux'
import Content from './Content'
import {
    fetchFilms,
    fetchYears,
    fetchGenres,
    fetchLanguages,
    nextPage,
    prevPage,
    firstPage
} from '../../actions/Films'
import { 
    showModal, 
} from '../../actions/Modal'

const mapStateToProps = (state) => {
    return {
        films:     state.films.films,
        fetching:  state.films.fetching,
        page_num:  state.films.page_num,
        years:     state.films.years,
        genres:    state.films.genres,
        languages: state.films.languages,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchFilms: (page_num, filters) => {
            dispatch(fetchFilms(page_num, filters));
        },
        showModal: (movie_title) => {
            dispatch(showModal(movie_title));
        },
        fetchFilters: () => {
            dispatch(fetchYears());
            dispatch(fetchGenres());
            dispatch(fetchLanguages());
        },
        nextPage: (page_num) => {
            dispatch(nextPage(page_num));
        },
        prevPage: (page_num) => {
            dispatch(prevPage(page_num));
        },
        firstPage: () => {
            dispatch(firstPage());
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Content);
