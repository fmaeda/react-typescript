import React, { Component } from 'react';
import { Container, Header } from 'src/App/styled';
import Captcha from 'src/components/Captcha';

class App extends Component {
  public render() {
    return (
      <Container flex={1} direction="column">
        <Header>Titulo</Header>
        <p>Teste</p>
        <p>Teste</p>
        <Captcha description="Captcha teste" />
      </Container>
    );
  }
}

export default App;
