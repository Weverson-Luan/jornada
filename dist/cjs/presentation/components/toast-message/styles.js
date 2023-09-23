var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.WrapperToash=exports.WrapperTextToash=exports.WrapperBorderCistomToash=exports.BorderCustomToash=void 0;var _native=_interopRequireDefault(require("styled-components/native"));var WrapperToash=_native.default.View.attrs({width:"90%",flexDirection:"row",algnItems:"center",justifyContent:"space-between",borderRadius:8})`
  background-color: ${function(_ref){var theme=_ref.theme;return theme.colors.neutral25;}};
`;exports.WrapperToash=WrapperToash;var BorderCustomToash=_native.default.View`
  width: 10px;
  height: 100%;
  background-color: ${function(_ref2){var options=_ref2.options,theme=_ref2.theme;return options==="alert"&&theme.colors.blue25||options==="error"&&theme.colors.orange500||options==="success"&&theme.colors.green400;}};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;exports.BorderCustomToash=BorderCustomToash;var WrapperBorderCistomToash=_native.default.View.attrs({})``;exports.WrapperBorderCistomToash=WrapperBorderCistomToash;var WrapperTextToash=_native.default.View.attrs({padding:6,borderRadius:8})`
  width: 100%;
  background-color: ${function(_ref3){var theme=_ref3.theme;return theme.colors.neutral25;}};
`;exports.WrapperTextToash=WrapperTextToash;