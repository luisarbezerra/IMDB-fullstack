
const initialState = {
    show_modal:    false,
    modal_film:    null,
};
  
export const modal = (state = initialState, { type, payload }) => {
    switch (type) {
      case 'OPEN_MODAL':
          return { ...state, show_modal: true, modal_film: payload }
      case 'CLOSE_MODAL':
          return { ...state, show_modal: false, modal_film: null }
      default:
          return state;
    }
}

export default modal;