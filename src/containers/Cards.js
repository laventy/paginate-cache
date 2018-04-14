import { connect } from 'react-redux'
import { addPage, addCache } from '../actions'
import Cards from '../components/Cards'

const mapStateToProps = state => ({
    cards: state.pages[state.meta.currentPageIndex]
})

const mapDispatchToProps = dispatch => ({
    addPage: (pageIndex, isGetTotalNum = false) => dispatch(addPage(pageIndex, isGetTotalNum)),
    addCache: (from, to) => dispatch(addCache(from, to))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cards)