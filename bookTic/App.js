navigator.geolocation = require('@react-native-community/geolocation');
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Signup from './Screens/Signup';
import Login from './Screens/Login';
import Splash from './Screens/Splash';
import Location from './Screens/Location';
import CurrentLocation from './Screens/CurrentLocation';
import AvailableBusStations from './Screens/AvailableBusStations';
import ChooseOptionButtons from './Screens/ChooseOptionButtons';



const Stack = createStackNavigator();


export default class App extends Component{

	render(){

	return(

         <NavigationContainer>

          <Stack.Navigator>

             <Stack.Screen  name= "Welcome" component={Login}   options={{ headerShown: false }} />
            <Stack.Screen  name= "Register" component={Signup}  options={{ headerShown: false }} />
            <Stack.Screen  name= "location" component={Location} options={{
            	headerShown: true ,
            	headerStyle: {backgroundColor:"#FECE21"}
             }} />
             <Stack.Screen  name= "current location" component={CurrentLocation}
						   options={{
            	 headerShown: true,
            	 headerStyle: {backgroundColor:"#FECE21"}
             }} />
						 <Stack.Screen  name= "bus stations" component={AvailableBusStations}
							options={{
							headerShown: true,
							headerStyle: {backgroundColor:"#FECE21"}
						 }} />
						 <Stack.Screen  name= "choose option" component={ChooseOptionButtons}
						 options={{
						 headerShown: false,
						}} />




          </Stack.Navigator>

      </NavigationContainer>


		);
  }

}
