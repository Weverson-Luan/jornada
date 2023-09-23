/**
 * IMPORTS
 */
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { RoutesStackAuth } from './stack.routes';

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <RoutesStackAuth />
    </NavigationContainer>
  );
};

/**
 * EXPORTS
 */
export { AppRoutes };
