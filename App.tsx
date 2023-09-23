import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import Toash from 'react-native-toast-message';

import {theme} from './src/styles/theme/theme';

import {AppRoutes} from './src/presentation/routes';

import {toastConfig} from './src/utils/custtom-react-native-tosst-message';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#050022'} />
      <AppRoutes />
      <Toash config={toastConfig} />
    </ThemeProvider>
  );
};

export default App;
