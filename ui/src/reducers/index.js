import { combineReducers } from 'redux'
import { films } from './Films'
import { modal } from './Modal'

export default combineReducers({
    films, modal
})
