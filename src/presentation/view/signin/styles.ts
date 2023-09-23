/**
 * IMPORTS
 */
import styled from 'styled-components/native';

const Container = styled.ScrollView`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray300};
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
`;

/**
 * EXPORTS
 */
export { Container };
