/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,Image,Keyboard,
  Text,Dimensions,TouchableHighlight,
  StatusBar,TouchableWithoutFeedback,
  TextInput,KeyboardAvoidingView, Alert,
} from 'react-native';


import Icon from 'react-native-vector-icons';
import {theme} from '../Constants/themes';
import Button from 'react-native-button';
import Signup from '../Screens/Signup';
import Location from '../Screens/Location';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import auth from '@react-native-firebase/auth';


export default class Login extends Component{

  constructor(props){
    super(props);
    this.unsuscriber =null;
    this.state={
      isAutenticated:'',
      typedEmail:'',
      typedPassword: '',
      user: null,
    }
  }

   render(){


   let _onPressLogin = () =>{
      Alert.alert("Account","login successful");

      if(Alert){


         setTimeout(()=> {

       this.props.navigation.navigate('location');
      }, 1000);



      }else{
        (error) => console.log(error);

      }
    }



    return(

     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <ScrollView
     >
      <View  style= {styles.container}>

             <Image
         style={styles.backGroundStyle}
          source={require('../Constants/Assets/BgPattern.png')}
        ></Image>

            <View style={styles.logoContainer}>

        <Image
         style={styles.logoStyle}
          source={require('../Constants/Assets/logo.png')}
        ></Image>

        </View>

        <Text style= {styles.textHeader}>Signin Account</Text>

       <View style={ styles.inputContainer }>
               <Image
         style={styles.backGroundStyle}
          source={require('../Constants/Assets/BgPattern.png')}
        ></Image>


        <View style= { {alignContent:'center',justifyContent:'center',alignItems:'center', marginTop:20} }>
       <TextInput  style={styles.input}

       placeholder=" email"
       placeholderTextColor={theme.color.greyDarker}
       keyboardType='email-address'
       autoCorrect={false}
       returnKeyType= 'next'
       onChangeText={
       (text) =>{
         this.setState({typedEmail: text});
       }
     }

       />

       <TextInput  style={styles.input}

       placeholder="password"
       placeholderTextColor={theme.color.greyDarker}
       autoCorrect={false}
       secureTextEntry={true}
       onChangeText={
       (text) =>{
         this.setState({typedPassword: text});
       }
     }

       />
      <Button style={styles.btnContainer}
       onPress= {_onPressLogin}
       >
       Login

        </Button>

      <View style={styles.linkContainer}>
        <Text style={styles.registerText}
        >New here?
         </Text>

       <Button>
        <Text style={styles.registerLink}
          onPress={() => this.props.navigation.navigate('Register')}
        > SignUp
         </Text>
         </Button>
       </View>

       </View>
     </View>

      </View>
  </ScrollView>
   </TouchableWithoutFeedback>

    );
  }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   fontFamily: 'sans serif',
   alignContent:'center',
   justifyContent:'center',
   flexDirection:'column',
   alignItems: 'center',
   backgroundColor: '#FECE21',



 },
 textHeader:{
  flex:1 / 2,
  fontFamily: 'sans serif',
  fontSize:20,
  fontWeight: 'normal',
  marginTop: 5,
  color: theme.color.black,
  marginBottom: 5,
  alignItems:'center'
 },

 inputContainer:{
  flex:2,
   flexDirection:'column',
   marginTop:20,
   width: wp('100'),
   height: hp('70'),
  backgroundColor: theme.color.offWhite,
  alignItems:'center',
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10

 },
 input:{
   borderRadius:15,
   backgroundColor:theme.color.greyLighter,
   width:wp('80'),
   marginHorizontal: 20,
   paddingHorizontal:10,
   marginBottom:10,
   fontSize: 18,
   fontWeight: 'normal',
   padding: 15,
   marginTop: 10,


 },
 btnContainer:{
   flexDirection: 'row',
   width:wp('40'),
   alignItems:'center',
   height: 45,
   color: theme.color.black,
   backgroundColor:'#FECE21' ,
   fontSize: 18,
   fontWeight:'normal',
   borderRadius:15,
   padding: 10,
   marginHorizontal: 20,
   marginBottom: 10


 },

 registerText:{

   color: theme.color.greyDarker,

 },

  logoContainer:{

       alignContent:'center',
       alignItems: 'center',
       justifyContent:'center',
       marginTop: 30
   },

   logoStyle:{

    width:wp('20'),
    height:hp('16'),
    backgroundColor: 'transparent',
    paddingHorizontal: 10,


   },
    backGroundStyle: {
     position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.1
   },
   registerLink:{
    fontWeight:'bold',
   color: '#FECE21'

 },

 linkContainer:{
  flexDirection:'row',
  alignItems:'center',
   fontSize: 20,
   fontWeight:'400',
   backgroundColor:'transparent'
 }
});
