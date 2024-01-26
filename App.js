import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc'
// import Home from './src/screens/Home'
import Login from './src/screens/login/Login';

export default function App() {
  return (
    <View style={tw`flex-1 bg-[#0e1017] justify-center items-center`}>
      {/* <Home /> */}
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}
