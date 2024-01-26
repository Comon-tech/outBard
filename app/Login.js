import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';

import tw from 'twrnc'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { app } from '../firebaseConfig';

export default function Login() {

  const [emailInputValue, setEmailInputValue] = useState()
  const [passwordInputValue, setPasswordInputValue] = useState()

  const handleLogin = () => {
    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, emailInputValue, passwordInputValue)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        router.push("/")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }

  const handleSignup = () => {
    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, emailInputValue, passwordInputValue)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }




  return (
    <View style={tw`flex-1 justify-center items-center`}>

      <Text style={tw`text-3xl font-bold text-zinc-600`}>🔐Login to continue</Text>
      <View style={tw`border-2 border-[#3d3f44] p-4 rounded-2xl m-5 w-[50%]`}>

        <TextInput
          value={emailInputValue}
          onChangeText={(text) => setEmailInputValue(text)}
          style={tw`bg-[#272530]  border-2 p-2 m-2 text-white rounded-2`} placeholder="Enter your email" textContentType='emailAdderss' />

        <TextInput
          value={passwordInputValue}
          onChangeText={(text) => setPasswordInputValue(text)}
          style={tw`bg-[#272530]  border-2 p-2 m-2 p-2 m-2 text-white rounded-2`} secureTextEntry placeholder="Enter your password" type textContentType='password' />


        <View style={tw`flex flex-row justify-center items-center`}>

          <TouchableOpacity
            onPress={() => handleLogin()}
            style={tw`bg-[#272530] border-[#3d3f44] border-2 p-2 m-2  p-2 m-2 text-white rounded-2`}>
            <Text style={tw`text-white`}>Login</Text>
          </TouchableOpacity>
          <Text>or</Text>
          <TouchableOpacity
            onPress={() => handleSignup()}
            style={tw`bg-[#272530] border-[#3d3f44] border-2 p-2 m-2 p-2 m-2 text-white rounded-2`}>
            <Text style={tw`text-white`}>Signup</Text>
          </TouchableOpacity>
        </View>

      </View>
      <StatusBar style="dark" />
    </View>
  );
}

