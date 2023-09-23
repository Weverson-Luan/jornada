var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.Container=void 0;var _native=_interopRequireDefault(require("styled-components/native"));var Container=_native.default.ScrollView`
  width: 100%;
  background-color: ${function(_ref){var theme=_ref.theme;return theme.colors.gray300;}};
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
`;exports.Container=Container;