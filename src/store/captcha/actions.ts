import { action, ActionType } from 'typesafe-actions';

export enum ActionTypes {
  CAPTCHA_SELECT = 'CAPTCHA_SELECT',
}

export const captchaSelect = (selection: string) =>
  action(ActionTypes.CAPTCHA_SELECT, {
    selection,
  });

const actions = {
  captchaSelect,
};

export type Action = ActionType<typeof actions>;

export default actions;
