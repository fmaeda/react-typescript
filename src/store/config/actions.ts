import { action, ActionType } from 'typesafe-actions';

export enum ActionTypes {
  CONFIG_SET = 'CONFIG_SET',
}

export const setConfig = (value: string) =>
  action(ActionTypes.CONFIG_SET, {
    value,
  });

const actions = {
  setConfig,
};

export type Action = ActionType<typeof actions>;
export default actions;
