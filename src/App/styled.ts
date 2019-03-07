import styled, { flex } from 'src/Styles';

export const Container = styled.div`
  ${flex({ alignItems: 'center' })};
  background: ${({ theme }) => theme.color.primary};
`;

export const Header = styled.div`
  color: green;
`;
