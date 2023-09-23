var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.BoxStyles=void 0;var _reactNative=require("react-native");var _native=_interopRequireDefault(require("styled-components/native"));var _styledSystem=require("styled-system");var BoxStyles=(0,_native.default)(_reactNative.View)`
  ${_styledSystem.width}
  ${_styledSystem.height}
  ${_styledSystem.minHeight}
  ${_styledSystem.minWidth}
  ${_styledSystem.flexDirection}
  ${_styledSystem.alignItems}
  ${_styledSystem.justifyContent}
  ${_styledSystem.color}
  ${_styledSystem.space}
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
  ${_styledSystem.position}
  ${_styledSystem.backgroundColor}
  ${_styledSystem.borderColor}
  ${_styledSystem.borderRadius}
  ${_styledSystem.borderWidth}
  ${_styledSystem.border}
  ${_styledSystem.shadow}
`;exports.BoxStyles=BoxStyles;