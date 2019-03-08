import React from 'react';
import { connect } from 'react-redux';
import { RootState } from 'src/store';

import { configActions } from 'src/store/config';

import UserInput from 'src/components/UserInput';

const mapStateToProps = ({
  local: {
    config: { localConfig },
  },
}: RootState) => ({
  localConfig,
});

type Props = {
  setConfig: typeof configActions.setConfig;
} & ReturnType<typeof mapStateToProps>;

class LocalUserInput extends React.Component<Props> {
  private handleButtonClick = (value: string) => {
    const { setConfig } = this.props;
    setConfig(value);
  };

  public render() {
    const { localConfig } = this.props;
    return (
      <UserInput
        title="LocalStorage"
        value={localConfig || ''}
        onButtonClick={this.handleButtonClick}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  {
    ...configActions,
  },
)(LocalUserInput);
