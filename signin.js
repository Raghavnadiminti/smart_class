import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity,TextInput } from 'react-native';

 const Signin= ()=>{
    const navigation=useNavigation()
   const [username,setUserName]=useState(' ')
   const [password,setPassword]=useState(' ')
   const [confirmPassword,setconfirmPassword]=useState(' ')
   const [flag,setFlag]=useState(true) 
   const [processing,setProcessing]=useState(false)
   const [message,setmessage]=useState(' ')
   const[teacher,setTeacher]=useState(false)
   const[student,setStudent]=useState(false) 


  function setusername(e){
       setUserName(e)
   }

   function set_Password(e){
      setPassword(e)
   }

   function setConformPassword(e){
      setconfirmPassword(e)
   }


   function validate(){
    setProcessing(true)
    console.log(username,password,confirmPassword)
    let valid_state=true
    try{
      if(username!=null && username!=undefined && username.length>=7){ 
        const usernameRegex = /^[a-zA-Z0-9_]+$/;
         valid_state=usernameRegex.test(username);    
      }
      
      if(!valid_state){
        setProcessing(false)
        setmessage("this is not valid username") 
        return valid_state
      }

      if(password===confirmPassword){
           
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/;
        valid_state=passwordRegex.test(password);

         if(!valid_state && password.length<=5){
             setProcessing(false) 
             setmessage("this is password is too weak must contain special chracters and digits")
         }

      }
      else{
             valid_state=false 

             if(!valid_state){
                setProcessing(false) 
             setmessage("password is not confirmed")

             return valid_state
             }
      }
    if(!teacher && !student){
      setProcessing(false) 
      valid_state=false 
      setmessage("select teacher or student")

    }

    return valid_state
  
  
  
  
  }
    catch(e){
        console.log(e) 

        setProcessing(false) 
        setmessage(" issue with us ")
    }

   }


   function form_validation(){
      
    try{
          if(validate()){
                 console.log('ok')
          }
          else{
            setFlag(false)
          }
        }

        catch(e){
                     console.log(e)
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

                <Text style={styles.input}>conforim password</Text> 
                
                <TextInput
                         style={styles.input}
                         keyboardType="password"
                         placeholder="confirm  password"
                         placeholderTextColor="#555"
                         secureTextEntry={true}
                         onChangeText={setConformPassword}
                       />

           {!flag?<Text>{message}</Text>:null}




                       <TouchableOpacity
                       style={styles.button}
                           onPress={form_validation}
                       >
                             <Text style={styles.text}>Sign-in</Text>

                       </TouchableOpacity>


    </View>
    <TouchableOpacity
                                    style={styles.button}
                                        onPress={()=>{setTeacher(true)
                                          setStudent(false)
                                        }}
                                    >
                                          <Text style={styles.text}>teacher</Text>
             
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                    style={styles.button}
                                        onPress={()=>{setStudent(true)
                                          setStudent(false)
                                        }}
                                    >
                                          <Text style={styles.text}>student</Text>
             
                                    </TouchableOpacity>
   
                 <TouchableOpacity
                                    style={styles.button}
                                        onPress={()=>{navigation.navigate('login')}}
                                    >
                                          <Text style={styles.text}>already have account?login</Text>
             
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


export default Signin