import { connect } from 'react-redux'
import { toggleDrawer } from '../actions'
import TemporaryDrawer from '../components/TemporaryDrawer'

const mapStateToProps = state => ({
    currentCard: state.pages[state.meta.currentPage][state.meta.currentCard]
})

const mapDispatchToProps = dispatch => ({
    toggleDrawer: currentCard => dispatch(toggleDrawer(currentCard))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TemporaryDrawer)