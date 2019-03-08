import { ThunkAction } from 'redux-thunk';
import { State } from './reducers';
import actions, { Action } from './actions';
import axios from 'axios';

export const fetchLogin = (
  login: string,
): ThunkAction<Promise<any>, State, null, Action> => (
  dispatch,
  getState,
): Promise<any> => {
  console.log('getState', getState());
  return axios
    .get('/api/teste')
    .then(({ data }) =>
      dispatch(
        actions.setLogin(`Login: ${login} - Server response: ${data.teste}`),
      ),
    )
    .catch(err => console.log('err', err));
};

export default {
  fetchLogin,
};
