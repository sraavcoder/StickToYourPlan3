import React from 'react';
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import Step4 from './screens/Step4';
import Step1 from './screens/Step1';
import Step2 from './screens/Step2';
import Step3 from './screens/Step3';

import Go from './screens/GoScreen';

import { AppTabNavigator } from './components/TabNavigator';


export default function App() {
  return (
    <AppContainer />
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  AppTabNavigator: { screen: AppTabNavigator },
  Step4: { screen: Step4 },
  Step1: { screen: Step1 },
  Step2: { screen: Step2 },
  Go: { screen: Go },
  HomeScreen: { screen: HomeScreen },
})

const AppContainer = createAppContainer(switchNavigator);
