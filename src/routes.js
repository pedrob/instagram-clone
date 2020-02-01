import React from 'react';
import { Image } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Feed from './pages/Feed';

import logo from './assets/instagram.png';

const Routes = createAppContainer(
	createStackNavigator(
		{ Feed },
		{
			defaultNavigationOptions: {
				headerTitle: () => <Image source={logo} />,
				headerTitleAlign: 'center',
				headerStyle: {
					backgroundColor: '#f5f5f5'
				}
			}
		}
	)
);

export default Routes;
