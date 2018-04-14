//  meta = {
//      currentPageIndex,
//      currentCardIndex
//      totalPages
//      cachedTo
//  }

const initialState = {
    currentPageIndex: 1,
    currentCardIndex: "",
    totalPages: "",
    cachedTo: 0
}

const meta = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case 'SET_TOTAL':
            return {
                ...state,
                totalPages: action.totalPages
            }
        case 'SET_CACHE_TO':
            return {
                ...state,
                cachedTo: action.cachedTo
            }
        case 'TOGGLE_DRAWER':
            return {
                ...state,
                currentCardIndex: action.currentCardIndex || action.currentCardIndex === 0 ? action.currentCardIndex : ""
            }
        case 'UPDATE_CURRENT_PAGE':
            if (action.newCurrentPageIndex <= 0 || action.newCurrentPageIndex > state.totalPages) {
                return state
            } else {
                return {
                    ...state,
                    currentPageIndex: action.newCurrentPageIndex
                }
            }
        default:
            return state
    }
}
export default meta