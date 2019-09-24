export const OPEN_MODAL  = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export function showModal(movie_title) {
    return {
        type:    OPEN_MODAL,
        payload: movie_title
    }
}

export function hideModal() {
    return {
        type: CLOSE_MODAL,
    }
}