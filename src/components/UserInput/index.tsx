import React, { ChangeEvent } from 'react';

import { Container, InputContainer, Input, Button } from './styled';

type Props = {
  title: string;
  value: string;
  onButtonClick: (value: string) => void;
};

type State = {
  value: string;
};

export default class extends React.Component<Props, State> {
  public readonly state: Readonly<State> = {
    value: '',
  };

  private handleClick = () => {
    const { onButtonClick } = this.props;
    const { value } = this.state;
    onButtonClick(value);
  };

  private handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: evt.target.value,
    });
  };

  public render() {
    const { value, title } = this.props;
    const { value: inputValue } = this.state;
    return (
      <Container>
        <h2>{title}</h2>
        <InputContainer>
          <Input value={inputValue} onChange={this.handleChange} />
          <Button onClick={this.handleClick}>Ok</Button>
        </InputContainer>
        <h3>{value}</h3>
      </Container>
    );
  }
}
