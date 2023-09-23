var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.TitleColor=exports.Container=void 0;var _native=_interopRequireDefault(require("styled-components/native"));var Container=_native.default.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${function(_ref){var theme=_ref.theme;return theme.colors.gray300;}};
`;exports.Container=Container;var TitleColor=_native.default.Text`
  color: ${function(_ref2){var theme=_ref2.theme;return theme.colors.orange150;}};
  text-align: left;
  line-height: 18px;
  letter-spacing: 0.5px;
  font-size: 14px;
  font-family: ${function(_ref3){var theme=_ref3.theme;return theme.fonts.inter_semi_bold_600;}};
`;exports.TitleColor=TitleColor;