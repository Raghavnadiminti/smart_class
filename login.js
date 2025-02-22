import * as React from 'react';

import { useNavigation } from '@react-navigation/native';
import {useState,useEffect} from 'react'

import { View, Text, StyleSheet, TouchableOpacity,TextInput } from 'react-native';


export default function Login(){

const [username,setUserName]=useState(' ')
   const [password,setPassword]=useState(' ') 
   const [flag,setFlag]=useState(true) 
    const [processing,setProcessing]=useState(false)
    const [message,setmessage]=useState(' ') 
    const navigation=useNavigation()

    function setusername(e){
        setUserName(e)
    }
 
    function set_Password(e){
       setPassword(e)
    }


    function form_validation(){
      
        if(true){
               console.log('ok')
        }
        else{
          setFlag(false)
        }
 }


    return(
             <View styles={styles.container}>
             
                 <Text style={styles.text}>Sign-in</Text>
                 
                 <View >
                            <Text style={styles.text}>Username</Text>
                            <TextInput
                                      style={styles.input}
                                      keyboardType="text"
                                      placeholder="Enter username"
                                      placeholderTextColor="#555"
                                      
                                      onChangeText={(e)=>{setusername(e)}}
                                    />
             
                             <Text style={styles.text}>password</Text>
                             <TextInput
                                      style={styles.input}
                                      keyboardType="password"
                                      placeholder="Enter password"
                                      placeholderTextColor="#555"
                                      secureTextEntry={true}
                                      onChangeText={set_Password}
                                    />
             
                            
             
                        {!flag?<Text>{message}</Text>:null}
             
             
             
             
                                    <TouchableOpacity
                                    style={styles.button}
                                        onPress={form_validation}
                                    >
                                          <Text style={styles.text}>login-in</Text>
             
                                    </TouchableOpacity>
             
             
                 </View>
             
             
                 <TouchableOpacity
                                    style={styles.button}
                                        onPress={()=>{navigation.navigate('Signin')}}
                                    >
                                          <Text style={styles.text}>don't have account?signin</Text>
             
                                    </TouchableOpacity>

             
                </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#f0f0f0',
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    detailBackground: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background color for details section
      padding: 45,
      borderRadius: 10,
      width:300,
    },
    text: {
      fontSize: 18,
      color: '#000', // Black text color
      marginBottom: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    button: {
      alignItems: 'center',
      padding: 10,
      backgroundColor: 'rgba(255,255,255,0.8)', // Light background for buttons
      borderRadius: 5,
    },
    buttonText: {
      marginTop: 5,
      fontSize: 16,
      color: '#000', // Black text color for buttons
    },
  });
  
  