import React, { createContext, useReducer } from 'react'

const initState = {
    country: null,
    season: 2022
}

const countryReducer = (state, action) => {
    switch (action.type) {
        case "SELECT_COUNTRY":
            return {
                ...state,
                country: action.payload
            }
        case "CHANGE_SEASON":
            return {
                ...state,
                season: action.payload
            }
        default:
            return
    }
}

export const CountryContext = createContext();

export default function CountryProvider({ children }) {

    const [state, dispatch] = useReducer(countryReducer, initState);

    return (
        <CountryContext.Provider value={{ state, dispatch }}>
            {children}
        </CountryContext.Provider>
    )
}
