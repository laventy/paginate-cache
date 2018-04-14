import axios from 'axios';

export const toggleDrawer = currentCardIndex => ({
    type: 'TOGGLE_DRAWER',
    currentCardIndex
})

// Meta Action Creators
export const updateCurrentPage = newCurrentPageIndex => ({
    type: 'UPDATE_CURRENT_PAGE',
    newCurrentPageIndex
})

export const setTotal = totalPages => ({
    type: 'SET_TOTAL',
    totalPages
})

export const setCachedTo = cachedTo => ({
    type: 'SET_CACHE_TO',
    cachedTo
})

// Pages Action Creators
export const fetchPageSuccess = (pageIndex, cards) => ({
    type: 'FETCH_PAGE_SUCCESS',
    pageIndex,
    cards
})

// Thunk
const getUrl = (pageIndex) => {
    return `https://atr-test-dh1.aiam-dh.com/atr-gateway/ticket-management/api/v1/tickets?ticketType=incident&sortBy=lastUpdateDate&sortDirection=DESC&page=${pageIndex}&perPage=12`
}

const config = {
    headers: {
        'apiToken': "eyJhbGciOiJIUzUxMiIsInppcCI6IkRFRiJ9.eNqM0cFqg0AQBuB3mbMUEqtEb1t3kgwxa9FpSylFTLKEhUbFjbQgvns3bS-FUnP9-eafgRnA9juIwZr6ePOmb8GDqj8YXe-1S9_1zgX7TldnfYB4Fsx9P1jMQj8MIg9a3Z2MtaapLcQvA9TV6TKUo5ClSJgesWTc3qeC0bW0XeMGzkY7PIyj99urjGlJiWDK1CQmiYqJn_-DQm5JXSW_KpeEqbz-XKZkgzzNfvqKSblR2VOKcoV3opheX6DIk3WJakXqD_3qwbFr-vbyFhCclw8F5uBS_dF-fzEK51Hoj58AAAD__w.bLfVpqBqdmhhD-ryfP6xGEJrJSAMyEFCu4LLw82UAH-S7zLNLMqBXEPOTrWiobhJ5aySO7px12brh35CaOB3Mg",
        'Content-Type': "application/json",
        'Accept': "application/json"
    }
}

export const addPage = (pageIndex, isGetTotalNum = false) => {
    return (dispatch, getState) => {
        //dispatch(itemsIsLoading(true));

        // fetch(url)
        //     .then((response) => {
        //         if (!response.ok) {
        //             throw Error(response.statusText);
        //         }

        //         dispatch(itemsIsLoading(false));

        //         return response;
        //     })
        //     .then((response) => response.json())
        //     .then((items) => dispatch(itemsFetchDataSuccess(items)))
        //     .catch(() => dispatch(itemsHasErrored(true)));

        // Cancel data fetching if it is already in the cache
        if (getState().pages[pageIndex]) {
            return
        }

        // Cancel data fetching if the request has been sent for cache
        if (pageIndex <= getState().meta.cachedTo) {
            return
        }

        axios.get(getUrl(pageIndex), config).then((response) => {
            dispatch(fetchPageSuccess(pageIndex, response.data))

            // Get total number of cards
            if (isGetTotalNum) {
                dispatch(setTotal(Math.ceil(response.headers["x-total-count"] / 12)))
            }
        })
    };
}

export const addCache = (from, to) => {
    return (dispatch) => {
        // Update the cachedTo state
        dispatch(setCachedTo(to))

        // Send requests to fetch more pages
        for (let pageIndex = from; pageIndex <= to; pageIndex++) {
            axios.get(getUrl(pageIndex), config).then((response) => {
                dispatch(fetchPageSuccess(pageIndex, response.data))
            })
        }
    };
}

const threshold = 2
const cachedPerTime = 4
export const checkAndAddCache = (currentPageIndex) => {
    return (dispatch, getState) => {
        const cacheTo = getState().meta.cachedTo;

        if (cacheTo - currentPageIndex < threshold) {
            const newCacheTo = cacheTo + cachedPerTime
            // Update the cachedTo state
            dispatch(setCachedTo(newCacheTo))

            // Send requests to fetch more pages
            for (let pageIndex = cacheTo + 1; pageIndex <= newCacheTo; pageIndex++) {
                axios.get(getUrl(pageIndex), config).then((response) => {
                    dispatch(fetchPageSuccess(pageIndex, response.data))
                })
            }
        }
    };
}