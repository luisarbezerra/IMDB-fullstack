
import { connect } from 'react-redux'
import { 
    hideModal, 
} from '../../actions/Modal'
import FilmModal from './FilmModal'

const mapStateToProps = (state) => {
    return {
        show_modal: state.modal.show_modal,
        modal_film: state.modal.modal_film,
        modal_info: state.films.film,
        loading:    state.films.fetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideModal: () => {
            dispatch(hideModal());
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FilmModal);