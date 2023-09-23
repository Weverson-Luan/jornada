var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.ButtonStyled=void 0;var _reactNative=require("react-native");var _native=_interopRequireDefault(require("styled-components/native"));var _styledSystem=require("styled-system");var ButtonStyled=(0,_native.default)(_reactNative.TouchableOpacity)`
  ${_styledSystem.width};
  ${_styledSystem.height};
  ${_styledSystem.backgroundColor};
  ${_styledSystem.color};
  ${_styledSystem.padding};
  ${_styledSystem.paddingTop};
  ${_styledSystem.paddingLeft}
  ${_styledSystem.paddingRight}
  ${_styledSystem.paddingBottom}
  ${_styledSystem.margin};
  ${_styledSystem.marginTop};
  ${_styledSystem.marginLeft};
  ${_styledSystem.marginRight};
  ${_styledSystem.marginBottom};
  ${_styledSystem.minWidth};
  ${_styledSystem.minHeight};
  ${_styledSystem.borderRadius};
  ${_styledSystem.borderWidth};
  ${_styledSystem.borderColor};
  ${_styledSystem.space};
  ${_styledSystem.flexbox};
  ${_styledSystem.shadow};
  ${_styledSystem.letterSpacing};
  opacity: ${function(_ref){var _ref2;var opacity=_ref.opacity;return(_ref2=`${opacity}`)!=null?_ref2:9;}};
`;exports.ButtonStyled=ButtonStyled;