import { Link } from "expo-router";
import { StyleSheet, ScrollView, Text, View, Dimensions, Platform, Image, TouchableOpacity } from "react-native";
import outBardIcon from '../assets/outbard-icon.png'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import tw from 'twrnc'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const isMobile = width < 600;

const Sidebar = () => {
  return (
    <View style={styles.sidebar}>
      <View style={tw`flex-row justify-around items-center`}>
        <Image source={outBardIcon} alt="OutBard Icon" style={tw`w-20 h-20`}></Image>
        <Text style={tw`text-3xl font-bold text-zinc-600`}>OutBard</Text>
      </View>

      {/* <Text style={tw`text-3xl font-bold text-zinc-600`}>Conversations</Text> */}
      <TouchableOpacity style={tw`flex  flex-row justify-between items-center bg-[#363241] hover:bg-[#3d3f44] p-2 m-2 rounded-2`}>
        <Text style={tw`text-lg text-[#808080]`}>New Conversation</Text>
        <FontAwesome name="pencil-square-o" size={24} color="grey" />
      </TouchableOpacity>

      {/* conversation list */}
      <ScrollView persistentScrollbar={false} horizontal={false} style={tw`h-[150px] flex  bg-[#000000] flex-col `}>
        <TouchableOpacity style={tw`flex  flex-row justify-evenly items-center bg-[#353535] hover:bg-[#3d3f44] p-2 m-3 rounded-2`}>
          <Text style={tw`text-lg text-[#808080]`}>Conversation 1</Text>
          {/* <FontAwesome name="save" size={24} color="black" /> */}
          <FontAwesome name="share-square-o" size={24} color="grey" />
          <FontAwesome name="pencil-square-o" size={24} color="grey" />
          <MaterialIcons name="delete-outline" size={27} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex  flex-row justify-between items-center bg-[#353535] hover:bg-[#3d3f44] p-2 m-3 rounded-2`}>
          <Text style={tw`text-lg text-[#808080]`}>Conversation 2</Text>
          <FontAwesome name="share-square-o" size={24} color="grey" />
          <FontAwesome name="pencil-square-o" size={24} color="grey" />
          <MaterialIcons name="delete-outline" size={27} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex  flex-row justify-between items-center bg-[#353535] hover:bg-[#3d3f44] p-2 m-3 rounded-2`}>
          <Text style={tw`text-lg text-[#808080]`}>Conversation 3</Text>
          <FontAwesome name="share-square-o" size={24} color="grey" />
          <FontAwesome name="pencil-square-o" size={24} color="grey" />
          <MaterialIcons name="delete-outline" size={27} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex  flex-row justify-between items-center bg-[#353535] hover:bg-[#3d3f44] p-2 m-3 rounded-2`}>
          <Text style={tw`text-lg text-[#808080]`}>Conversation 4</Text>
          <FontAwesome name="share-square-o" size={24} color="grey" />
          <FontAwesome name="pencil-square-o" size={24} color="grey" />
          <MaterialIcons name="delete-outline" size={27} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex  flex-row justify-between items-center bg-[#353535] hover:bg-[#3d3f44] p-2 m-3 rounded-2`}>
          <Text style={tw`text-lg text-[#808080]`}>Conversation 5</Text>
          <FontAwesome name="share-square-o" size={24} color="grey" />
          <FontAwesome name="pencil-square-o" size={24} color="grey" />
          <MaterialIcons name="delete-outline" size={27} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex  flex-row justify-between items-center bg-[#353535] hover:bg-[#3d3f44] p-2 m-3 rounded-2`}>
          <Text style={tw`text-lg text-[#808080]`}>Conversation 6</Text>
          <FontAwesome name="share-square-o" size={24} color="grey" />
          <FontAwesome name="pencil-square-o" size={24} color="grey" />
          <MaterialIcons name="delete-outline" size={27} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex  flex-row justify-between items-center bg-[#353535] hover:bg-[#3d3f44] p-2 m-3 rounded-2`}>
          <Text style={tw`text-lg text-[#808080]`}>Conversation 6</Text>
          <FontAwesome name="share-square-o" size={24} color="grey" />
          <FontAwesome name="pencil-square-o" size={24} color="grey" />
          <MaterialIcons name="delete-outline" size={27} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex  flex-row justify-between items-center bg-[#353535] hover:bg-[#3d3f44] p-2 m-3 rounded-2`}>
          <Text style={tw`text-lg text-[#808080]`}>Conversation 6</Text>
          <FontAwesome name="share-square-o" size={24} color="grey" />
          <FontAwesome name="pencil-square-o" size={24} color="grey" />
          <MaterialIcons name="delete-outline" size={27} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex  flex-row justify-between items-center bg-[#353535] hover:bg-[#3d3f44] p-2 m-3 rounded-2`}>
          <Text style={tw`text-lg text-[#808080]`}>Conversation 6</Text>
          <FontAwesome name="share-square-o" size={24} color="grey" />
          <FontAwesome name="pencil-square-o" size={24} color="grey" />
          <MaterialIcons name="delete-outline" size={27} color="grey" />
        </TouchableOpacity>
      </ScrollView>


      <View style={tw` `}>
        <TouchableOpacity style={tw`flex  flex-row  bg-violet-300 p-2 m-3 rounded-2`}>

          <View style={tw`flex flex-row justify-between items-center`}>
            <Image source={outBardIcon} alt="OutBard Icon" style={tw` rounded-full w-10 h-10`}></Image>
            <View style={tw`flex flex-col`}>
              <Text style={tw`text-lg text-[#000000]`}>Upgrade to Pro</Text>
              <Text style={tw`text-sm text-[#000000]`}>Upgrade to Pro</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* user Profile */}
        <View style={tw`flex  flex-row p-2 m-3 rounded-2`}>
          <View style={tw`flex flex-row justify-between items-center`}>
            <TouchableOpacity style={tw``}>
              <Image source={outBardIcon} alt="OutBard Icon" style={tw` rounded-full w-10 h-10`}></Image>
            </TouchableOpacity>
            <Text style={tw`text-lg text-[#000000]`}>Collons Omondi</Text>

          </View>
        </View>

      </View>


    </View>
  );
};

export default function Page() {
  return (
    <View style={tw`bg-[#363241] flex-1 flex-row items-center`}>
      {!isMobile && Platform.OS === 'web' && <Sidebar />}

      <View style={tw`flex-1 flex-col m-3 text-center`}>

        <Text style={tw`text-3xl font-bold text-grey-600`}>Hello World Welcome to OutBard</Text>
        {/* <Text style={tw`text-xl font-bold text-grey-600`}>👈 Select a previous conversation or create a new one from the sidebar to get started */}

        <Image source={outBardIcon} alt="OutBard Icon" style={tw` rounded-full w-40 h-40`}></Image>

        <View style={tw`border-red-500 border-2 rounded-2xl flex-1 flex-col m-3`}>
          <Text style={tw`text-xl font-bold text-red-600`}>
            🌊 OutBard is an AI writing assistant web application powered by Gemini-pro.
            It allows you to generate code, quotes, text for blog posts, emails,
            or any other writing project. you can also chat with OutBard to get creative responses.</Text>
        </View>
        <Link style={tw`text-xl font-bold text-zinc-600`} href="/Home">Home</Link>
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
