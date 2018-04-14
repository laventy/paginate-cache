import { connect } from 'react-redux'
import { toggleDrawer } from '../actions'
import TemporaryDrawer from '../components/TemporaryDrawer'

const mapStateToProps = state => ({
    currentCard: state.meta.currentCardIndex !== "" && state.pages[state.meta.currentPageIndex] ? state.pages[state.meta.currentPageIndex][state.meta.currentCardIndex] : {}
})

const mapDispatchToProps = dispatch => ({
    toggleDrawer: currentCardIndex => dispatch(toggleDrawer(currentCardIndex))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TemporaryDrawer)