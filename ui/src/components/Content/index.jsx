import { connect } from 'react-redux'
import Content from './Content'
import {
    fetchFilms
} from '../../actions/Films'

const mapStateToProps = (state) => {
    return {
        films: state.films.films,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchFilms: () => {
            dispatch(fetchFilms());
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Content);
