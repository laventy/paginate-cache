import { connect } from 'react-redux'
import { addPage, addNewCache } from '../actions'
import Cards from '../components/Cards'

const mapStateToProps = state => ({
    cards: state.pages[state.meta.currentPageIndex]
})

const mapDispatchToProps = dispatch => ({
    addPage: (pageIndex, isGetTotalNum = false) => dispatch(addPage(pageIndex, isGetTotalNum)),
    addNewCache: (cache) => dispatch(addNewCache(cache))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cards)