import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";

// Set up your API key
const API_KEY = "AIzaSyA-9jTq1JYfSsP5qVnBk5k6mL4Q5Kt1vZU";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = "Write a story about a magic backpack."

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
// const generator = () => {




//   return (
//     <View>
//       <Text>generator</Text>
//     </View>
//   )
// }

// export default generator

// const styles = StyleSheet.create({})