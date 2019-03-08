import React, { Component } from 'react';
import { Container, Header } from 'src/App/styled';
import Captcha from 'src/components/Captcha';

import LocalUserInput from './LocalUserInput';
import SessionUserInput from './SessionUserInput';

class App extends Component {
  public render() {
    return (
      <Container flex={1} direction="column">
        <Header>Titulo</Header>
        <Captcha description="Captcha teste" />
        <LocalUserInput />
        <SessionUserInput />
      </Container>
    );
  }
}

export default App;
