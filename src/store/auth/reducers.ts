import { Action, ActionTypes } from './actions';

export type State = {
  login: string | null;
};

const DEFAULT_STATE: State = {
  login: null,
};

export default (state: State = DEFAULT_STATE, action: Action): State => {
  const { payload, type } = action;
  switch (type) {
    case ActionTypes.AUTH_LOGIN: {
      return {
        ...state,
        login: payload.login,
      };
    }
    default:
      return state;
  }
};
