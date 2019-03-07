import { Action, ActionTypes } from './actions';

export type State = {
  [key: string]: string;
};

const DEFAULT_STATE: State = {};

export default (state: State = DEFAULT_STATE, action: Action): State => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.CONFIG_SET: {
      return {
        ...state,
        [payload.key]: payload.value,
      };
    }
    default:
      return state;
  }
};
