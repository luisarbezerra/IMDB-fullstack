import { connect } from 'react-redux'
import Content from './Content'
import {
    fetchFilms
} from '../../actions/Films'

const mapStateToProps = (state) => {
    return {
        films:    state.films.films,
        page_num: state.films.page_num
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchFilms: (page_num, filters) => {
            dispatch(fetchFilms(page_num, filters));
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Content);
