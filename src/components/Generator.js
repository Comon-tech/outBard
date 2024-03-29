import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const Generator = () => {

    const genrate = async () => {
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
        <View>
            <Text>Generator</Text>
        </View>
    )
}

export default Generator

const styles = StyleSheet.create({})