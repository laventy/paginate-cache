import { connect } from 'react-redux'
import { updateCurrentPage, addPage, checkAndAddCache } from '../actions'
import Pagination from '../components/Pagination'

const mapStateToProps = state => ({
    currentPageIndex: state.meta.currentPageIndex,
    totalPages: state.meta.totalPages
})

const mapDispatchToProps = dispatch => ({
    updateCurrentPage: newCurrentPageIndex => dispatch(updateCurrentPage(newCurrentPageIndex)),
    addPage: (pageIndex, isGetTotalNum = false) => dispatch(addPage(pageIndex, isGetTotalNum)),
    checkAndAddCache: (currentPageIndex) => dispatch(checkAndAddCache(currentPageIndex))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination)