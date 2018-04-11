import { combineReducers } from 'redux'
import current from './current'
import pages from './pages'

export default combineReducers({
    current,
    pages
})