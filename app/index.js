import { Link } from "expo-router";
import { StyleSheet, ScrollView, Text, View, Dimensions, Platform, Image, TextInput, TouchableOpacity } from "react-native";
import outBardIcon from '../assets/outbard-icon.png'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Sidebar from "../src/components/Sidebar";

import tw from 'twrnc'
import { useState } from "react";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const isMobile = width < 600;



export default function Page() {
  const [chatInputValue, setChatInputValue] = useState()
  return (
    <View style={tw`bg-[#363241] flex-1 flex-row `}>
      {!isMobile && Platform.OS === 'web' && <Sidebar />}

      <View style={tw`flex-1 flex-col  justify-between  m-3 text-center`}>

        <View style={tw`  flex justify-center items-center `}>
        <Image source={outBardIcon} alt="OutBard Icon" style={tw` rounded-full w-30 h-30`}></Image>
        </View>

        <View style={tw``}>
          <Text style={tw`text-lg  text-center text-white`}>
            🌊 OutBard is an AI writing assistant web application powered by Gemini-pro.
            It allows you to generate code, quotes, text for blog posts, emails,
            or any other writing project. you can also chat with OutBard to get creative responses.</Text>
        </View>

        <View style={tw`w-full  px-1 flex flex-col items-center`}>
        
        <View style={tw`w-full flex flex-row`}>
        <View style={tw`w-[45%] m-2 col-1 border-2 p-5 border-grey-300 rounded-3`}>
          <Text style={tw`text-lg  text-center text-white`}>📖 Generate text for your next blog post</Text>
        </View>

        <View style={tw`w-[45%] m-2 border-2 p-5 border-grey-300 rounded-3`}>
          <Text style={tw`text-lg  text-center text-white`}>💻 Generate code for your next github project.</Text>
        </View>
        </View>

        <View style={tw`w-full flex flex-row m-2`}>
        <View style={tw`w-[45%] m-2 border-2 p-5 border-grey-300 rounded-3`}>
          <Text style={tw`text-lg  text-center text-white`}>🖼️ Use images as your prompts.</Text>
        </View>

        <View style={tw`w-[45%] m-2 border-2 p-5 border-grey-300 rounded-3`}>
          <Text style={tw`text-lg  text-center text-white`}>✉️ Send responses to your email or to your peers.</Text>
        </View>
        </View>

        </View>
        
        {/* <Link style={tw`text-xl font-bold text-zinc-600`} href="/Home">Home</Link> */}

        <View style={tw`p-5  flex flex-row items-center mb-10 w-[100%] `}>
        
                <TextInput
                    value={chatInputValue}
                    onChangeText={(text) => setChatInputValue(text)}
                    style={tw`rounded-2xl w-[95%] bg-gray-100 text-grey-darker py-2 font-normal font-bold  py-1 px-2 outline-none text-lg text-gray-600`}
                    placeholder="What's up?" />
                
                    <TouchableOpacity
                        style={tw`  py-2 `}>
                            <MaterialCommunityIcons style={tw`-ml-10`} name="dots-triangle" size={24} color="red" />
                            
                        </TouchableOpacity>
                
        </View>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({

  sidebar: {
    // flex: 1,
    flexDirection: 'column',
    width: width / 5, //Width of the sidebar
    height: height,
    backgroundColor: '#272530',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
