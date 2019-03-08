// import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ThemeProvider } from 'emotion-theming';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { theme } from 'src/Styles';
import configureStore from 'src/store';

import App from 'src/App';
import './index.css';

const { store, persistor } = configureStore();

// const render = (AppComponent: React.ComponentType) => {
//   ReactDOM.render(
//     <ThemeProvider theme={theme}>
//       <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//           <AppContainer>
//             <AppComponent />
//           </AppContainer>
//         </PersistGate>
//       </Provider>
//     </ThemeProvider>,
//     document.getElementById('root') as HTMLElement,
//   );
// };

// render(App);

// if (module.hot) {
//   module.hot.accept('./App', () => {
//     render(App);
//   });
// }

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
