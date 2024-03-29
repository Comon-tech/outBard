import { Link } from "expo-router";
import { StyleSheet, ScrollView, Text, View, Dimensions, Platform, Image, TextInput, TouchableOpacity } from "react-native";
import outBardIcon from '../assets/outbard-icon.png'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Sidebar from "../src/components/Sidebar";
import Realm from "realm"
import tw from 'twrnc'
import { useState } from "react";
import Stitch from 'mongodb-stitch-browser-sdk';
import Generator from "../src/components/Generator";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const isMobile = width < 600;

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyCju5scpyj178pLfPfTUi7-8QPL72P05eA");

// let uri = "mongodb+srv://comon928:<password>@cluster0.dgpjtis.mongodb.net/?retryWrites=true&w=majority";

async function  getData(params) {
  const app = new Realm.App({ id: "application-0-hoful" });
  const credentials = Realm.Credentials.anonymous();
  try {
    const user = await app.logIn(credentials);
  } catch(err) {
    console.error("Failed to log in", err);
  }
}



export default function Page() {
  const [chatInputValue, setChatInputValue] = useState()

  
  const Genrate = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: "Hello, I have 2 dogs in my house.",
          },
          {
            role: "model",
            parts: "Great to meet you. What would you like to know?",
          },
        ],
        generationConfig: {
          maxOutputTokens: 100,
        },
      });
    
      const msg = "How many paws are in my house?";
    
      const result = await chat.sendMessage(msg);
      const response = await result.response;
      const text = response.text();
      console.log(text);

       
    }

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
        {/* <genrate /> */}

        <View style={tw`p-5  flex flex-row items-center mb-10 w-[100%] `}>
        
                <TextInput
                    value={chatInputValue}
                    onChangeText={(text) => setChatInputValue(text)}
                    style={tw`rounded-2xl w-[95%] bg-gray-100 text-grey-darker py-2 font-normal font-bold  py-1 px-2 outline-none text-lg text-gray-600`}
                    placeholder="What's up?" />
                
                    <TouchableOpacity
                        style={tw`  py-2 `}>
                            <MaterialCommunityIcons 
                            onPress={() => Genrate()}
                            style={tw`-ml-10`} name="dots-triangle" size={24} color="red" />
                            
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
