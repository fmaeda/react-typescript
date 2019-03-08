import { Action, ActionTypes } from './actions';

export type State = {
  localConfig: string | null;
};

const DEFAULT_STATE: State = {
  localConfig: null,
};

export default (state: State = DEFAULT_STATE, action: Action): State => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.CONFIG_SET: {
      return {
        ...state,
        localConfig: payload.value,
      };
    }
    default:
      return state;
  }
};
