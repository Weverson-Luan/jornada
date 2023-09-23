var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.Title=exports.InputCustom=exports.Container=void 0;var _reactNative=require("react-native");var _native=_interopRequireDefault(require("styled-components/native"));var _styledSystem=require("styled-system");var Container=_native.default.View`
  width: 100%;
  height: 70px;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${function(_ref){var theme=_ref.theme;return theme.colors.neutral25;}};
  margin-bottom: 10px;
`;exports.Container=Container;var Title=_native.default.Text`
  color: ${function(_ref2){var theme=_ref2.theme;return theme.colors.black100;}};
  text-align: center;
  line-height: 24px;
  font-size: 16px;
  font-family: ${function(_ref3){var theme=_ref3.theme;return theme.fonts.inter_thin_100;}};
`;exports.Title=Title;var InputCustom=(0,_native.default)(_reactNative.TextInput)`
  ${_styledSystem.width};
  ${_styledSystem.height};
  ${_styledSystem.backgroundColor};
  ${_styledSystem.borderWidth};
  ${_styledSystem.borderTop};
  ${_styledSystem.borderLeft};
  ${_styledSystem.borderRight};
  ${_styledSystem.borderBottom};
  ${_styledSystem.borderRadius};
  ${_styledSystem.borderColor};
  ${_styledSystem.padding};
  ${_styledSystem.paddingTop};
  ${_styledSystem.paddingLeft};
  ${_styledSystem.paddingRight};
  ${_styledSystem.paddingBottom};
  ${_styledSystem.margin};
  ${_styledSystem.marginTop};
  ${_styledSystem.marginLeft};
  ${_styledSystem.marginRight};
  ${_styledSystem.marginBottom};
  color: ${function(_ref4){var theme=_ref4.theme;return theme.colors.gray900;}};
  font-size: 16px;
`;exports.InputCustom=InputCustom;