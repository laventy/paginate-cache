import { connect } from 'react-redux'
import { updateCurrentPage } from '../actions'
import Pagination from '../components/Pagination'

const mapStateToProps = state => ({
    currentPage: state.meta.currentPage,
    totalPages: state.meta.totalPages
})

const mapDispatchToProps = dispatch => ({
    updateCurrentPage: currentPage => dispatch(updateCurrentPage(currentPage))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination)