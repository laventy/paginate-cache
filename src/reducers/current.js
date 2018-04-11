const initialState = {
    currentPage: 1,
    currentCard: ""
}

const current = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_DRAWER':
            return {
                ...state,
                currentCard: action.currentCard
            }
        default:
            return state
    }
}
export default current