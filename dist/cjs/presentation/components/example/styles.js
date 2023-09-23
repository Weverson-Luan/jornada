var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.Title=exports.Container=void 0;var _native=_interopRequireDefault(require("styled-components/native"));var Container=_native.default.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${function(_ref){var theme=_ref.theme;return theme.colors.gray300;}};
`;exports.Container=Container;var Title=_native.default.Text`
  color: ${function(_ref2){var theme=_ref2.theme;return theme.colors.blue500;}};
  text-align: center;
  line-height: 24px;
  font-size: 18px;
  font-family: ${function(_ref3){var theme=_ref3.theme;return theme.fonts.inter_thin_100;}};
`;exports.Title=Title;