/**
 * IMPORTS
 */
import React from 'react';

import { ThemeProvider } from 'styled-components/native';

import { theme } from '../../styles/theme/theme';

// criando o provider
const Providers: React.FC = ({ children }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

/**
 * EXPORTS
 */
export { Providers };
