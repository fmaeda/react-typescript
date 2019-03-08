import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Container, Header } from 'src/App/styled';
import Captcha from 'src/components/Captcha';

import LocalUserInput from './LocalUserInput';
import SessionUserInput from './SessionUserInput';

class App extends Component {
  public render() {
    return (
      <Container flex={1} direction="column">
        <Header>Titulo</Header>
        <Captcha description="Captcha testes" />
        <LocalUserInput />
        <SessionUserInput />
      </Container>
    );
  }
}

export default hot(module)(App);
// export default App;
