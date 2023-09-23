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

const TitleColor = styled.Text`
  color: ${({ theme }) => theme.colors.orange150};
  text-align: left;
  line-height: 18px;
  letter-spacing: 0.5px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.inter_semi_bold_600};
`;

/**
 * EXPORTS
 */
export { Container, TitleColor };
