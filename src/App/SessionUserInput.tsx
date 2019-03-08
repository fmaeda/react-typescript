import React from 'react';
import { ThunkActionDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { RootState } from 'src/store';

import { authAsyncActions } from 'src/store/auth';

import UserInput from 'src/components/UserInput';

const mapStateToProps = ({
  session: {
    auth: { login },
  },
}: RootState) => ({
  login,
});

type Props = {
  setAsyncLogin: ThunkActionDispatch<typeof authAsyncActions.fetchLogin>;
} & ReturnType<typeof mapStateToProps>;

class SessionUserInput extends React.Component<Props> {
  private handleButtonClick = (value: string) => {
    const { setAsyncLogin } = this.props;
    setAsyncLogin(value);
  };

  public render() {
    const { login } = this.props;
    return (
      <UserInput
        title="SessionStorage"
        value={login || ''}
        onButtonClick={this.handleButtonClick}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  {
    setAsyncLogin: authAsyncActions.fetchLogin,
  },
)(SessionUserInput);
