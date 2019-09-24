import { connect } from 'react-redux'
import FilmRow from './FilmRow'
import {
    fetchSingleFilm
} from '../../actions/Films'

const mapStateToProps = (state) => {
    return {
        fetching: state.films.fetching
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchSingleFilm: (movie_title) => {
            dispatch(fetchSingleFilm(movie_title));
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FilmRow);
