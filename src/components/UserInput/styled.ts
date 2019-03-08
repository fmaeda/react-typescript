import styled, { flex } from 'src/Styles';

export const Container = styled.div`
  ${flex({ direction: 'column' })};
  margin: 25px;
  padding: 10px;
  border: solid ${({ theme }) => theme.color.primary} 1px;
`;

export const InputContainer = styled.div`
  ${flex({ direction: 'row' })};
`;

export const Input = styled.input`
  flex: 1;
`;

export const Button = styled.button``;
