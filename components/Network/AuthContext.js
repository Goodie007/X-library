import React from 'react';
import { reducer } from './Reducer';
import { login } from './Action';

export const AuthContext = React.createContext();

const initialState = {
    loading: false,
    onBoarded: false,
    loggedin: false,
    user: {},
    messages: true,
    
}


function AuthContextProvider({ children }){
    const [state, dispatch ] = React.useReducer(reducer, initialState);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;