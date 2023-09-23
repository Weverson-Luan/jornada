/**
 * IMPORTS
 */
import styled from "styled-components/native";

// typings
import { BorderCustomToashProps } from "./interface";

const WrapperToash = styled.View.attrs({
  width: "90%",
  flexDirection: "row",
  algnItems: "center",
  justifyContent: "space-between",
  borderRadius: 8,
})`
  background-color: ${({ theme }) => theme.colors.neutral25};
`;

const BorderCustomToash = styled.View<BorderCustomToashProps>`
  width: 10px;
  height: 100%;
  background-color: ${({ options, theme }) =>
    (options === "alert" && theme.colors.blue25) ||
    (options === "error" && theme.colors.orange500) ||
    (options === "success" && theme.colors.green400)};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

const WrapperBorderCistomToash = styled.View.attrs({})``;

const WrapperTextToash = styled.View.attrs({
  padding: 6,
  borderRadius: 8,
})`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutral25};
`;

/**
 * EXPORTS
 */
export {
  WrapperToash,
  BorderCustomToash,
  WrapperTextToash,
  WrapperBorderCistomToash,
};