/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,Image,Keyboard,
  Text,Dimensions,
  StatusBar,TouchableWithoutFeedback,
  TextInput,KeyboardAvoidingView, Alert,
} from 'react-native';

import {theme} from '../Constants/themes';
import Button from 'react-native-button';


export default class Splash extends Component{
  
    render(){


        return(
        
      <View  style= {styles.container}>
       
        <Text style= {styles.textHeader}>Book Ticket</Text>
        <View style={styles.imageContainer}>
        
        <Image 
         style={styles.imageStyle}
          source={require('../Constants/Images/10860.jpg')}
        ></Image>
        
        
        </View>
        
     
       </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:'center',
    justifyContent:'center',
    flexDirection:'column',
    alignItems: 'center',
    backgroundColor: '#FECE21',
    borderRightColor:theme.color.orange,
    borderLeftColor:theme.color.orange,
    borderBottomLeftRadius: 500,
    borderTopRightRadius: 30
  },

textHeader:{
  
    fontFamily:'cursive',
    fontSize:35,
    fontWeight: 'bold',
    marginTop: 30,
    color: '#F8F8F7',
    marginBottom: 40,
    padding:10
   },
   imageContainer:{
      
       alignContent:'center',
       alignItems: 'center',
       justifyContent:'center'
   },
   imageStyle:{
    width:Dimensions.get('window').width / 10,
    height:Dimensions.get('window').height / 10,
   }
 });
 