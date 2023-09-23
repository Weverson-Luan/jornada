/**
 * IMPORTS
 */

import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray300};
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.blue500};
  text-align: center;
  line-height: 24px;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.inter_thin_100};
`;

/**
 * EXPORTS
 */
export { Container, Title };
