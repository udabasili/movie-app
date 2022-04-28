import { MoviesAttribute } from "../features/movies/type";

export const addMovie = (newMovie: MoviesAttribute, currentMovies: Array<MoviesAttribute>): Array<MoviesAttribute> => {
    const findExistingMovie = currentMovies.find(movie => movie.movieName === newMovie.movieName)
    let movies = [...currentMovies]
    if (findExistingMovie) {
        movies = currentMovies.map(movie => {
            return movie.movieName === newMovie.movieName ? ({
                ...movie,
                ...newMovie
            }) :
            movie
        })
    } else {
        movies.push(newMovie)

    }
    return movies
}