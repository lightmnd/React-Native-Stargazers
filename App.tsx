import React, {type PropsWithChildren, useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import DetailsPage from './pages/DetailsPage';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#414757',
      }}>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Home}>
          {/* <Stack.Screen name="Home" component={Home} /> */}
          <Stack.Screen
            name="Home"
            component={MyTabs}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="DetailsPage"
            component={DetailsPage}
            options={{header: () => null}}
          />
          {/* <Details.Screen name="DetailsPage" component={DetailsPage} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
