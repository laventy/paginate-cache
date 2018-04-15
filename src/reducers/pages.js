//  pages = {
//      pageIndex: [card] -- Key is the papge index, Value is the array of cards
//  }

const pages = (state = {}, action) => {
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