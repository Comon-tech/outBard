import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { getAuth } from "firebase/auth";
import outBardIcon from '../../assets/outbard-icon.png'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const Sidebar = () => {

  // const messageRef = db.collection('rooms').doc('roomA')
  // .collection('messages').doc('message1');



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

export default Sidebar
  
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
