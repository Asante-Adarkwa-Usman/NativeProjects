import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import GetStartedScreen from './Screens/GetStartedScreen';
import HomeScreen from './Screens/HomeScreen';
import FeedbackChatWithBot from './Screens/FeedbackChatWithBot';
 
  const Stack = createStackNavigator();



  function NavStack() {
   
     return (
    

         

          <Stack.Navigator 
             screenOptions={{
          gestureEnabled: true,    
          headerTitleAlign: 'center',
          headerStyle: {
          backgroundColor: "#E2C600",
          },
          headerTintColor: '#382D07',
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}
            > 
             
             <Stack.Screen  name= "GetStarted" component={ GetStartedScreen } options={{
              headerShown: false ,
               
             }} />
              
             <Stack.Screen  name= "Home" component={ HomeScreen } options={{
              title: "Home",
              headerShown: true ,
              headerStyle: {backgroundColor:"#E2C600"}
             }} />

              <Stack.Screen  name= "Chat" component={ FeedbackChatWithBot } options={{
              title: "Chat",
              headerShown: true ,
              headerStyle: {backgroundColor:"#E2C600"}
             }} />

           
          

          </Stack.Navigator>

                 
 
 
  
      

      );


  }

export default function App() {


   return(

        <NavigationContainer>

           <NavStack />

        </NavigationContainer> 

      
    );

 
}
