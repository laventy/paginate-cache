//  meta = {
//      currentPageIndex, -- the current page index
//      currentCardIndex, -- the current card index
//      totalPages, -- the number of total pages
//      cache -- pages indexes being cached
//  }

const initialState = {
    currentPageIndex: 1,
    currentCardIndex: "",
    totalPages: "",
    cache: new Set()
}

const meta = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TOTAL':
            return {
                ...state,
                totalPages: action.totalPages
            }
        case 'ADD_CACHE':
            return {
                ...state,
                cache: new Set([...state.cache, ...action.cache])
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