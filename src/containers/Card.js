import { connect } from 'react-redux'
import { toggleDrawer } from '../actions'
import Card from '../components/Card'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    toggleDrawer: currentCardIndex => dispatch(toggleDrawer(currentCardIndex))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card)