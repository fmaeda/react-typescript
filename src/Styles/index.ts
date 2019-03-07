import styled, { CreateStyled } from '@emotion/styled/macro';
type Theme = {
  color: {
    primary: string;
    error: string;
  };
  size: {
    font: {
      normal: string;
      big: string;
    };
    icon: {
      normal: string;
      big: string;
    };
  };
};

export const theme: Theme = {
  color: {
    primary: 'blue',
    error: 'red',
  },
  size: {
    font: {
      normal: '11px',
      big: '14px',
    },
    icon: {
      normal: '14px',
      big: '16px',
    },
  },
};

export { default as flex } from './flex';
export default styled as CreateStyled<Theme>;
