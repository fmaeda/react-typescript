import { Action, ActionTypes } from './actions';

export type State = {
  selection: string | null;
};

const DEFAULT_STATE: State = {
  selection: null,
};

export default (state: State = DEFAULT_STATE, action: Action): State => {
  const { payload, type } = action;
  switch (type) {
    case ActionTypes.CAPTCHA_SELECT: {
      return {
        selection: payload.selection,
      };
    }
    default:
      return state;
  }
};
