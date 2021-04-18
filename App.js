import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import home from './myScreens/Main'
import lis from './myScreens/Todo'
export default class AppContainer extends React.Component {

  render() {
  
        const AppNavigator = createStackNavigator({
          Primary: {
            screen: home
          },
          ToDo: {
            screen: lis
          }
        },
      
          {
            initialRouteName: 'home',
            headerMode: 'none'
          });
  
        const AppContainer = createAppContainer(AppNavigator);
        return(
        <AppContainer/>
        );
    }
  
  
  }