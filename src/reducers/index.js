import { combineReducers } from 'redux'
import pages from './pages'
import meta from './meta'

export default combineReducers({
    meta,
    pages
})