import { action, ActionType } from 'typesafe-actions';

export enum ActionTypes {
  AUTH_LOGIN = 'AUTH_LOGIN',
}

export const setLogin = (login: string) =>
  action(ActionTypes.AUTH_LOGIN, {
    login,
  });

const actions = {
  setLogin,
};

export type Action = ActionType<typeof actions>;

export default actions;
