import { connect } from 'react-redux'
import { toggleDrawer } from '../actions'
import Card from '../components/Card'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    toggleDrawer: currentCard => dispatch(toggleDrawer(currentCard))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card)