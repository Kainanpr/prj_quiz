import {createStackNavigator, createAppContainer} from 'react-navigation';

import SignIn from './pages/signIn/signIn.js';
import Home from './pages/home/home.js';

const Routes = createAppContainer(
  createStackNavigator({
    SignIn,
    Home,
  }),
);

export default Routes;
