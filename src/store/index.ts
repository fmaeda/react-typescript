import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/lib/storage/session';
import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware, Reducer } from 'redux';
import { StateType } from 'typesafe-actions';

import { captchaReducer } from 'src/store/captcha';
import { configReducer } from 'src/store/config';

const middlewares = [thunk];

const persistLocalConfig = {
  key: 'storeLocal',
  storage: localStorage,
  // whitelist: ['config'],
};

const persistSessionConfig = {
  key: 'storeSession',
  storage: sessionStorage,
  // whitelist: ['auth', 'serverInfo'],
};

const localReducers = combineReducers({
  config: configReducer,
});

const sessionReducers = combineReducers({
  captcha: captchaReducer,
});

export type RootState = {
  local: StateType<typeof localReducers>;
  session: StateType<typeof sessionReducers>;
};

const rootReducer = (combineReducers({
  local: persistReducer(persistLocalConfig, localReducers),
  session: persistReducer(persistSessionConfig, sessionReducers),
}) as unknown) as Reducer<RootState>;

export default () => {
  const store = createStore<RootState, any, any, any>(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
