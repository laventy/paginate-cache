import { connect } from 'react-redux'
import { } from '../actions'
import Cards from '../components/Cards'

const mapStateToProps = state => ({
    cards: state.pages[state.current.currentPage]
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cards)