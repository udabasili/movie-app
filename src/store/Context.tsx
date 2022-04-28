import React, { createContext, useReducer } from "react"
import { moviesData } from "../data/movies"
import { MoviesAttribute } from "../features/movies/type"
import { addMovie } from "../utils/addMovie"

const initialMoviesData = moviesData.map(item => ({
    movieName: item.Title,
    duration: item.Runtime !== 'N/A'  ? item.Runtime : '150 min',
    rating: item.Metascore !== 'N/A'  ? item.Metascore : '89'
}))

type Actions = 
    | {
        type: 'ADD MOVIE',
        payload: MoviesAttribute
    }

type State = {
    movieList: Array<MoviesAttribute>
}

const initialState = {
    movieList: initialMoviesData as  Array<MoviesAttribute> ,
    addMovie: (value: MoviesAttribute) => {}
}


const reducer = (state: State, action: Actions) => {
    switch (action.type) {
        case "ADD MOVIE":
            return {
                movieList: addMovie(action.payload, state.movieList)
            }
        default:
            return state
    }
}

export const Context = createContext(initialState)

type ContextProps = {
    children: React.ReactNode
}

export const AppContext = ({children}: ContextProps) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value={{
            addMovie: (value: MoviesAttribute) => dispatch({
                type: "ADD MOVIE",
                payload: value
            }),
            movieList: state.movieList
        }}>
            {children}
        </Context.Provider>

    )
}