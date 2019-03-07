import React from 'react';
import { ThunkActionDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { RootState } from 'src/store';
import { captchaActions, captchaAsyncActions } from 'src/store/captcha';

import { Container } from './styled';

const mapStateToProps = ({
  session: {
    captcha: { selection },
  },
}: RootState) => ({
  selection,
});

type Props = {
  description: string;
  select: typeof captchaActions.captchaSelect;
  asyncSelect: ThunkActionDispatch<typeof captchaAsyncActions.fetchCaptcha>;
} & ReturnType<typeof mapStateToProps>;

const Captcha: React.FunctionComponent<Props> = ({
  description,
  selection,
  select,
  asyncSelect,
}) => (
  <Container>
    {description}
    <button
      onClick={() => select(selection === 'teste' ? 'nao-teste' : 'teste')}
    >
      Toggle
    </button>
    <button onClick={() => asyncSelect()}>Async</button>
    <p>Selecionado: {selection}</p>
  </Container>
);

export default connect(
  mapStateToProps,
  {
    select: captchaActions.captchaSelect,
    asyncSelect: captchaAsyncActions.fetchCaptcha,
  },
)(Captcha);
