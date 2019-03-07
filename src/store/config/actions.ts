import { action, ActionType } from 'typesafe-actions';

export enum ActionTypes {
  CONFIG_SET = 'CONFIG_SET',
}

export const setConfig = (key: string, value: string) =>
  action(ActionTypes.CONFIG_SET, {
    key,
    value,
  });

const actions = {
  setConfig,
};

export type Action = ActionType<typeof actions>;
export default actions;
