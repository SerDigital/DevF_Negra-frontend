import Users from './views/Users';
//import Metrics from './views/Metric';

import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: Users},
  //Metrics: {screen: Metrics}
  

  
});

const app = createAppContainer(MainNavigator);

export default app;
