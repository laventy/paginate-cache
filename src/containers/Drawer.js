import { connect } from 'react-redux'
import { toggleDrawer } from '../actions'
import TemporaryDrawer from '../components/TemporaryDrawer'

const mapStateToProps = state => ({
    currentCard: state.pages[state.current.currentPage][state.current.currentCard]
})

const mapDispatchToProps = dispatch => ({
    toggleDrawer: currentCard => dispatch(toggleDrawer(currentCard))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TemporaryDrawer)