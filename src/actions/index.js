import axios from 'axios';

/*
 * Fetching Detail
 */
const getUrl = (pageIndex) => {
    return `https://atr-test-dh1.aiam-dh.com/atr-gateway/ticket-management/api/v1/tickets?ticketType=incident&sortBy=lastUpdateDate&sortDirection=DESC&page=${pageIndex - 1}&perPage=12`
}

const config = {
    headers: {
        'apiToken': "eyJhbGciOiJIUzUxMiIsInppcCI6IkRFRiJ9.eNqM0cFqg0AQBuB3mbMUEqtEb1t3kgwxa9FpSylFTLKEhUbFjbQgvns3bS-FUnP9-eafgRnA9juIwZr6ePOmb8GDqj8YXe-1S9_1zgX7TldnfYB4Fsx9P1jMQj8MIg9a3Z2MtaapLcQvA9TV6TKUo5ClSJgesWTc3qeC0bW0XeMGzkY7PIyj99urjGlJiWDK1CQmiYqJn_-DQm5JXSW_KpeEqbz-XKZkgzzNfvqKSblR2VOKcoV3opheX6DIk3WJakXqD_3qwbFr-vbyFhCclw8F5uBS_dF-fzEK51Hoj58AAAD__w.bLfVpqBqdmhhD-ryfP6xGEJrJSAMyEFCu4LLw82UAH-S7zLNLMqBXEPOTrWiobhJ5aySO7px12brh35CaOB3Mg",
        'Content-Type': "application/json",
        'Accept': "application/json"
    }
}

/*
 * Meta - Basic Action Creators
 */

// Update the current page index
export const updateCurrentPage = newCurrentPageIndex => ({
    type: 'UPDATE_CURRENT_PAGE',
    newCurrentPageIndex
})

// Set the total number of pages
export const setTotal = totalPages => ({
    type: 'SET_TOTAL',
    totalPages
})

// Toggle the drawer
// Open the drawer by giving a none empty card index
// Close the drawer by giving an empty card index value
export const toggleDrawer = currentCardIndex => ({
    type: 'TOGGLE_DRAWER',
    currentCardIndex
})

/*
 * Pages action creators/thunks
 */
// Add a new page into the pages state
export const fetchPageSuccess = (pageIndex, cards) => ({
    type: 'FETCH_PAGE_SUCCESS',
    pageIndex,
    cards
})

export const addPage = (pageIndex, isGetTotalNum = false) => {
    return (dispatch, getState) => {
        // Cancel data fetching if the page is 0 or less Or it is beyong the total
        const totalPages = getState().meta.totalPages ? getState().meta.totalPages : 9999
        if (pageIndex < 1 || pageIndex > totalPages) {
            return
        }

        // Cancel data fetching if it is already fetched
        if (getState().pages[pageIndex]) {
            return
        }

        // Cancel data fetching if the request has been sent for cache
        if (getState().meta.cache.has(pageIndex)) {
            return
        }

        // Add this page into cache
        dispatch(addCache(new Set([pageIndex])))

        axios.get(getUrl(pageIndex), config).then((response) => {
            dispatch(fetchPageSuccess(pageIndex, response.data))

            // Get total number of cards
            if (isGetTotalNum) {
                dispatch(setTotal(Math.ceil(response.headers["x-total-count"] / 12)))
            }
        })
    };
}

/*
 * Cache related action creators/thunks
 */
const threshold = 2
const cachedPerTime = 4

// Add new page indexes into the cache
export const addCache = cache => ({
    type: 'ADD_CACHE',
    cache
})

// cache parameter is a Set
export const addNewCache = (cache) => {
    return (dispatch, getState) => {
        var newCachedPages = new Set();
        const totalPages = getState().meta.totalPages ? getState().meta.totalPages : 9999

        // Check if already existed/registered in the cache
        const cacheInState = getState().meta.cache

        for (let pageIndex of cache) {
            if (!cacheInState.has(pageIndex)) {
                newCachedPages.add(pageIndex)
            }
        }

        // Update the cached state
        dispatch(addCache(newCachedPages))

        // Send requests to fetch more pages
        for (let pageIndex of cache) {
            if (pageIndex < 1 || pageIndex > totalPages)
                return

            axios.get(getUrl(pageIndex), config).then((response) => {
                dispatch(fetchPageSuccess(pageIndex, response.data))
            })
        };
    };
}

export const checkAndAddCache = (currentPageIndex) => {
    return (dispatch, getState) => {
        console.log("check and add cache - in function")
        const cache = getState().meta.cache;
        const totalPages = getState().meta.totalPages ? getState().meta.totalPages : 9999

        if (isNeedMoreCache(currentPageIndex, totalPages, cache)) {
            console.log("need more cache")
            // Get new page indexes that should be cached
            const newCachedPages = getNewCachedPages(currentPageIndex, totalPages, cache)

            // Update the cached state
            dispatch(addCache(newCachedPages))

            // Send requests to fetch more pages
            for (let pageIndex of newCachedPages) {
                if (pageIndex < 1 || pageIndex > totalPages)
                    return

                axios.get(getUrl(pageIndex), config).then((response) => {
                    dispatch(fetchPageSuccess(pageIndex, response.data))
                })
            };
        }
    };
}

/*
 *  Cache Helper funtions
 */
const isNeedMoreCache = (currentPageIndex, totalPages, cache) => {
    // Check page indexes of two positions forward and backward
    if (!cache.has(currentPageIndex - threshold) && (currentPageIndex - threshold) >= 1)
        return true
    if (!cache.has(currentPageIndex + threshold) && (currentPageIndex + threshold) >= 1)
        return true

    // Check page indexes of one position forward and backward
    if (!cache.has(currentPageIndex - 1) && (currentPageIndex - 1) >= 1)
        return true
    if (!cache.has(currentPageIndex + 1) && (currentPageIndex + 1) >= 1)
        return true
}

const getNewCachedPages = (currentPageIndex, totalPages, cache) => {
    var newCachedPages = new Set();

    for (let i = 1; i <= cachedPerTime; i++) {
        // Forward gathering
        const forwardPageIndex = currentPageIndex + i
        if (!cache.has(forwardPageIndex) && forwardPageIndex >= 1 && forwardPageIndex <= totalPages) newCachedPages.add(forwardPageIndex)
        // Backward gathering
        const backwardPageIndex = currentPageIndex - i
        if (!cache.has(backwardPageIndex) && backwardPageIndex >= 1 && backwardPageIndex <= totalPages) newCachedPages.add(backwardPageIndex)
    }

    return newCachedPages
}