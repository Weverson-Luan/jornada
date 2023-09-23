/**
 * IMPORTS
 */

import { TextInput } from 'react-native';

import styled from 'styled-components/native';

import {
  borderColor,
  borderRadius,
  borderWidth,
  borderTop,
  borderBottom,
  borderLeft,
  borderRight,
  backgroundColor,
  height,
  padding,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,
  margin,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  width,
} from 'styled-system';

import { type IInputCustomProps } from './interface';

const Container = styled.View`
  width: 100%;
  height: 70px;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.neutral25};
  margin-bottom: 10px;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.black100};
  text-align: center;
  line-height: 24px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.inter_thin_100};
`;

const InputCustom = styled(TextInput)<IInputCustomProps>`
  ${width};
  ${height};
  ${backgroundColor};
  ${borderWidth};
  ${borderTop};
  ${borderLeft};
  ${borderRight};
  ${borderBottom};
  ${borderRadius};
  ${borderColor};
  ${padding};
  ${paddingTop};
  ${paddingLeft};
  ${paddingRight};
  ${paddingBottom};
  ${margin};
  ${marginTop};
  ${marginLeft};
  ${marginRight};
  ${marginBottom};
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 16px;
`;

/**
 * EXPORTS
 */
export { Container, Title, InputCustom };
