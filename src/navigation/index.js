import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Icon} from '@ui-kitten/components';
import NombreComponente from '../components/Componente';
import {InnerHome, InnerHomeTwo} from './home/InnerHome';
import Discover from './discover/Dicover';

const MainStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Inner Home" component={InnerHome} />
      <MainStack.Screen name="Inner Home 2" component={InnerHomeTwo} />
    </MainStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      backBehavior={'initialRoute'}
      screenOptions={({route}) => ({
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        safeAreaInsets: {bottom: 8},
        tabBarIcon: ({color, size, focused}) => {
          let iconName = 'home-outline';
          switch (route.name) {
            case 'Home': {
              iconName = 'home-outline';
              break;
            }
            case 'Discover': {
              iconName = 'search-outline';
              break;
            }
            case 'Profile': {
              iconName = 'people-outline';
              break;
            }
          }

          return (
            <Icon
              name={iconName}
              size={size}
              fill={color}
              style={{
                fontSize: focused ? size + 2 : size,
                width: 24,
                height: 24,
              }}
            />
          );
        },
      })}>
      <Tab.Screen
        name="Home"
        options={{headerShown: false}}
        component={HomeNavigator}
      />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen
        name="Profile"
        component={NombreComponente}
        initialParams={{simpleMock: true}}
      />
    </Tab.Navigator>
  );
};

export {TabNavigator};
