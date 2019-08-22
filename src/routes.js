import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './pages/home/home.js';

const Routes = createAppContainer(
  createStackNavigator({
    Home,
  }),
);

export default Routes;
