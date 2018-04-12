//  meta = {
//      currentPage,
//      currentCard
//      totalPages
//  }

const initialState = {
    currentPage: 1,
    currentCard: "",
    totalPages: 2
}

const meta = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_DRAWER':
            return {
                ...state,
                currentCard: action.currentCard
            }
        case 'UPDATE_CURRENT_PAGE':
            if (action.currentPage <= 0 || action.currentPage > state.totalPages) {
                return state
            } else {
                return {
                    ...state,
                    currentPage: action.currentPage
                }
            }
        default:
            return state
    }
}
export default meta