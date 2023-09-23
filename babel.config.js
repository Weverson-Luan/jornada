module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: ".",
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".android.js",
          ".android.tsx",
          ".ios.js",
          ".ios.tsx",
        ],
        alias: {
          "@presentation": "./src/presentation",
          "@components": "./src/components",
          "@routes": "./src/routes",
        },
      },
    ],
  ],

}