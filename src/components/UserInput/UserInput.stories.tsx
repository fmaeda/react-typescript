import { storiesOf } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-emotion-theme';
import React from 'react';
import UserInput from '.';

import { theme } from 'src/Styles';

const theme2 = {
  ...theme,
  name: 'red',
  color: {
    ...theme.color,
    primary: 'red',
  },
};

storiesOf('Button', module)
  .addDecorator(withThemesProvider([theme, theme2]))
  .add('with text', () => (
    <UserInput
      key="teste"
      value="Testes"
      title="Titulos"
      onButtonClick={() => {}}
    />
    // <div>Testeeewwweeeewsssw</div>
  ));
// .add('with some emoji', () => <Button>😀 😎 👍 💯</Button>)
