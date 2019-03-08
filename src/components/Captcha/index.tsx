import React from 'react';
import { ThunkActionDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { RootState } from 'src/store';
import { authActions, authAsyncActions } from 'src/store/auth';

import { Container } from './styled';

const mapStateToProps = ({
  session: {
    auth: { login },
  },
}: RootState) => ({
  login,
});

type Props = {
  description: string;
  setLogin: typeof authActions.setLogin;
  asyncLogin: ThunkActionDispatch<typeof authAsyncActions.fetchLogin>;
} & ReturnType<typeof mapStateToProps>;

const Captcha: React.FunctionComponent<Props> = ({
  description,
  login,
  setLogin,
  asyncLogin,
}) => (
  <Container>
    {description}
    <button onClick={() => setLogin(login === 'teste' ? 'nao-teste' : 'teste')}>
      Toggle
    </button>
    <button onClick={() => asyncLogin('teste')}>Async</button>
    <p>Login: {login}</p>
  </Container>
);

export default connect(
  mapStateToProps,
  {
    setLogin: authActions.setLogin,
    asyncLogin: authAsyncActions.fetchLogin,
  },
)(Captcha);
