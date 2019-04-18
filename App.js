import Users from './views/Users';
import Metric from './views/Metric';

import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: Users},
  Metric: {screen: Metric}
    
});

const app = createAppContainer(MainNavigator);

export default app;
