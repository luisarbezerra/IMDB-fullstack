const initialState = {
    page_num:  1,
    film:      null,
    films:     null,
    genres:    null,
    years:     null,
    languages: null,
    fetching:  false,
    error:     null,
}

export const films = (state = initialState, { type, payload }) => {
  switch (type) {

    case 'FETCHING_SINGLE_FILM':
        return { ...state, fetching: true }
    case 'FETCHED_SINGLE_FILM':
        return { ...state, film: payload, fetching: false }
    case 'FETCH__SINGLE_FILM_ERROR':
        return { ...state, error:  payload, fetching: false }

    case 'FETCHING_FILMS':
        return { ...state, fetching: true }
    case 'FETCHED_FILMS':
        return { ...state, films: payload, fetching: false }
    case 'FETCH_FILMS_ERROR':
        return { ...state, error:  payload, fetching: false }
    
    case 'FETCHING_GENRES':
        return { ...state, fetching: true }
    case 'FETCHED_GENRES':
        return { ...state, genres: payload, fetching: false }
    case 'FETCH_GENRES_ERROR':
        return { ...state, error:  payload, fetching: false }

    case 'FETCHING_YEARS':
        return { ...state, fetching: true }
    case 'FETCHED_YEARS':
        return { ...state, years: payload, fetching: false }
    case 'FETCH_YEARS_ERROR':
        return { ...state, error:  payload, fetching: false }
    
    case 'FETCHING_LANGUAGES':
        return { ...state, fetching: true }
    case 'FETCHED_LANGUAGES':
        return { ...state, languages: payload, fetching: false }
    case 'FETCH_LANGUAGES_ERROR':
        return { ...state, error:  payload, fetching: false }

    case 'NEXT_PAGE':
        return { ...state, page_num: payload }
    case 'PREV_PAGE':
        return { ...state, page_num: payload }
    case 'FIRST_PAGE':
        return { ...state, page_num: 1 }

    default:
        return state;
  }
}

export default films;


