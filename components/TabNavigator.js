import { createBottomTabNavigator } from 'react-navigation-tabs';


import Step1 from '../screens/Step1';
import Step2 from '../screens/Step2';
import Step3 from '../screens/Step3';
import Step4 from '../screens/Step4';

export const AppTabNavigator = createBottomTabNavigator({
    Step1: {
        screen: Step1,
        navigationOptions: {
            tabBarLabel: "Step1",
        }
    },
    Step3: {
        screen: Step3,
        navigationOptions: {
            tabBarLabel: "Step2",
        }
    },
    Step4: {
        screen: Step4,
        navigationOptions: {
            tabBarLabel: "Step3",
        }
    },
});
