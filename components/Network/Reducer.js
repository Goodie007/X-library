import { LOADING, LOGIN, LOGOUT, MESSAGES, NOTIFICATIONS,
    ONBOARD, TRIGGER_PULL, BOOKMARK, POPULAR_BOOKS,
    RECENT_BOOKS, RECOMMENDED_BOOKS } from './Network/Action';



export const reducer = (state, action) => {
    switch(action.type){
        case LOADING:
            return{
                ...state,
                loading: action.payload,
                ...(action.payload === false && {triggerGet: Math.random()})
            }
            case LOGIN:
              return {
                ...state,
                loggedin: true,
                user: action.payload,
            }
            case LOGOUT:
              return {
                ...state,
                loggedin: false,
                user: {},
            }
            case ONBOARD:
              return {
                ...state,
                onBoarded: true,
            }
    }
}