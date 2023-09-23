/**
 * IMPORTS
 */

import * as React from 'react';

// crete-navigation
import {Header} from '@presentation/components/header/header';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import {HomeView} from '../view/home/home';
import {SigninView} from '../view/signin/signin';

const Stack = createNativeStackNavigator();

function RoutesStackAuth() {
  return (
    <Stack.Navigator
      initialRouteName="SigninView"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="SigninView"
        component={SigninView}
        options={{headerShown: true, header: () => <Header title="Login" />}}
      />
      <Stack.Screen
        name="HomeView"
        component={HomeView}
        options={{
          headerShown: true,
          header: () => <Header title="Controle de Jornada" />,
        }}
      />
    </Stack.Navigator>
  );
}

/**
 * IMPORTS
 */

export {RoutesStackAuth};
