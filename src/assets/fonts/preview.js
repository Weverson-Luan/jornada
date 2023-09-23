import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from "../../styles/theme/theme-storybook";

const withThemeProvider = (Story) => {
  return (
    <ThemeProvider theme={theme}>
      <Story/>
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];



