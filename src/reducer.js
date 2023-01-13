export default function reducer(state, action) {
  switch (action.type) {
    case 'WAITING':
      return { ...state, status: 'waiting' };
    case 'LOADING':
      return { ...state, status: 'loading' };
    case 'CONFIRMED_LIST':
      return { ...state, status: 'confirmed list' };
    case 'CONFIRMED_USER':
      return { ...state, status: 'confirmed user' };
    case 'ERROR':
      return { ...state, status: 'error' };
    default:
      return state;
  }
}
