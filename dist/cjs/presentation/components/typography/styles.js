var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.TypographyComponent=void 0;var _reactNative=require("react-native");var _native=_interopRequireDefault(require("styled-components/native"));var _styledSystem=require("styled-system");var TypographyComponent=(0,_native.default)(_reactNative.Text)`
  ${_styledSystem.color};
  ${_styledSystem.fontFamily};
  ${_styledSystem.fontSize};
  ${_styledSystem.size};
  ${_styledSystem.lineHeight}
  ${_styledSystem.letterSpacing};
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
  text-align: justify;
`;exports.TypographyComponent=TypographyComponent;