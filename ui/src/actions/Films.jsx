import fetch from 'isomorphic-fetch'

const baseUrl = 'http://localhost:5000/';

export const FETCHING_SINGLE_FILM    = 'FETCHING_SINGLE_FILM'
export const FETCHED_SINGLE_FILM     = 'FETCHED_SINGLE_FILM'
export const FETCH_SINGLE_FILM_ERROR = 'FETCH_SINGLE_FILM_ERROR'


export const FETCHING_FILMS          = 'FETCHING_FILMS'
export const FETCHED_FILMS           = 'FETCHED_FILMS'
export const FETCH_FILMS_ERROR       = 'FETCH_FILMS_ERROR'

export const FETCHING_GENRES         = 'FETCHING_GENRES'
export const FETCHED_GENRES          = 'FETCHED_GENRES'
export const FETCH_GENRES_ERROR      = 'FETCH_GENRES_ERROR'

export const FETCHING_YEARS          = 'FETCHING_YEARS'
export const FETCHED_YEARS           = 'FETCHED_YEARS'
export const FETCH_YEARS_ERROR       = 'FETCH_YEARS_ERROR'

export const FETCHING_LANGUAGES      = 'FETCHING_LANGUAGES'
export const FETCHED_LANGUAGES       = 'FETCHED_LANGUAGES'
export const FETCH_LANGUAGES_ERROR   = 'FETCH_LANGUAGES_ERROR'

export function fetchingSingleFilm() {
    return {
        type:    'FETCHING_SINGLE_FILM'
    }
}

export function fetchedSingleFilm(film) {
    return {
        type:    'FETCHED_SINGLE_FILM',
        payload: film,
    }
}
  
export function fetchSingleFilmError(error) {
    return {
        type:    'FETCH_SINGLE_FILM_ERROR',
        payload: error
    }
}

export function fetchSingleFilm(movie_title) {
    return async function (dispatch) {
        try {
            dispatch(fetchingSingleFilm())
            const url = `${baseUrl}/movie/${movie_title}`;

            let response = await fetch(url)
            const json = await response.json();
            if (response.ok) {
                dispatch(fetchedSingleFilm(json));
            } else {
                throw new Error(json.message);
            }
        } catch (error) {
            dispatch(fetchSingleFilmError(error));
        }
    }
}

export function fetchingFilms() {
    return {
        type:    'FETCHING_FILMS'
    }
}

export function fetchedFilms(films) {
    return {
        type:    'FETCHED_FILMS',
        payload: films,
    }
}
  
export function fetchFilmsError(error) {
    return {
        type:    'FETCH_FILMS_ERROR',
        payload: error
    }
}

export function fetchFilms(page_num, filters = {}) {
    return async function (dispatch) {
        try {
            dispatch(fetchingFilms())
            const url = buildUrl(page_num, filters);

            let response = await fetch(url)
            const json = await response.json();
            if (response.ok) {
                dispatch(fetchedFilms(json));
            } else {
                throw new Error(json.message);
            }
        } catch (error) {
            dispatch(fetchFilmsError(error));
        }
    }
}

export function fetchingGenres() {
    return {
        type:    'FETCHING_GENRES'
    }
}

export function fetchedGenres(genres) {
    return {
        type:    'FETCHED_GENRES',
        payload: genres,
    }
}
  
export function fetchGenresError(error) {
    return {
        type:    'FETCH_GENRES_ERROR',
        payload: error
    }
}

export function fetchGenres() {
    return async function (dispatch) {
        try {
            dispatch(fetchingGenres())
            const url = `${baseUrl}/genres`;

            let response = await fetch(url)
            const json = await response.json();
            if (response.ok) {
                dispatch(fetchedGenres(json));
            } else {
                throw new Error(json.message);
            }
        } catch (error) {
            dispatch(fetchGenresError(error));
        }
    }
}

export function fetchingYears() {
    return {
        type:    'FETCHING_YEARS'
    }
}

export function fetchedYears(years) {
    return {
        type:    'FETCHED_YEARS',
        payload: years,
    }
}
  
export function fetchYearsError(error) {
    return {
        type:    'FETCH_YEARS_ERROR',
        payload: error
    }
}

export function fetchYears() {
    return async function (dispatch) {
        try {
            dispatch(fetchingYears())
            const url = `${baseUrl}/years`;

            let response = await fetch(url)
            const json = await response.json();
            if (response.ok) {
                dispatch(fetchedYears(json));
            } else {
                throw new Error(json.message);
            }
        } catch (error) {
            dispatch(fetchYearsError(error));
        }
    }
}

export function fetchingLanguages() {
    return {
        type:    'FETCHING_LANGUAGES'
    }
}

export function fetchedLanguages(languages) {
    return {
        type:    'FETCHED_LANGUAGES',
        payload: languages,
    }
}
  
export function fetchLanguagesError(error) {
    return {
        type:    'FETCH_LANGUAGES_ERROR',
        payload: error
    }
}

export function fetchLanguages() {
    return async function (dispatch) {
        try {
            dispatch(fetchingLanguages())
            const url = `${baseUrl}/languages`;

            let response = await fetch(url)
            const json = await response.json();
            if (response.ok) {
                dispatch(fetchedLanguages(json));
            } else {
                throw new Error(json.message);
            }
        } catch (error) {
            dispatch(fetchLanguagesError(error));
        }
    }
}

function buildUrl(page_num, {substring, year, genre, language}){
    return `${baseUrl}/movies/${page_num}?` + toQueryString({substring, year, genre, language})
}

function toQueryString(object) {
    return Object.keys(object).map(key => (key && object[key]) ? `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}` : '').join('&');
}