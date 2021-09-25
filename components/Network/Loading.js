import { LOADING, LOGIN, LOGOUT, MESSAGES, NOTIFICATIONS,
         ONBOARD, TRIGGER_PULL, BOOKMARK, POPULAR_BOOKS,
         RECENT_BOOKS, RECOMMENDED_BOOKS } from './Network/Action';



        

export const login = (data) => {
    return {
        type: LOGIN,
        payload: data
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const loading = (data) => {
    return {
        type: LOADING,
        payload: data
    }
}

export const onBoard = () => {
    return {
        type: ONBOARD
    }
}


export const messages = (data) => {
    return {
        type: MESSAGES,
        payload: data
    }
}

export const bookmark = (data) => {
    return {
        type: BOOKMARK,
        payload: data
    }
}

export const triggerPull = () => {
    return {
        type: TRIGGER_PULL
    }
}

export const popularBooks = (data) => {
    return {
        type: POPULAR_BOOKS,
        payload: data
    }
}

export const recentBooks = (data) => {
    return {
        type: RECENT_BOOKS,
        payload: data
    }
}

export const recommendedBooks = (data) => {
    return {
        type: RECOMMENDED_BOOKS,
        payload: data
    }
}

export const notifications = (data) => {
    return {
        type: NOTIFICATIONS,
        payload: data
    }
}