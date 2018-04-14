//  pages = {
//      pageIndex: [card]
//  }

const pages = (state = {}, action) => {
    console.log(state)
    switch (action.type) {
        case 'FETCH_PAGE_SUCCESS':
            return {
                ...state,
                [action.pageIndex]: action.cards
            }
        default:
            return state
    }
}
export default pages