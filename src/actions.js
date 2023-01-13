const waiting = () => ({ type: 'WAITING' });

const loading = () => ({ type: 'LOADING' });

const confirmedList = () => ({ type: 'CONFIRMED_LIST' });

const confirmedUser = () => ({ type: 'CONFIRMED_USER' });

const error = () => ({ type: 'ERROR' });

export { waiting, loading, confirmedList, confirmedUser, error };
