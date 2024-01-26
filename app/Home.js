import { Text, View } from 'react-native';
import tw from 'twrnc'
import { Link } from 'expo-router'

export default function Page() {
  return (
    <View style={tw`flex-1  items-center`}>
      <Text style={tw`text-3xl font-bold text-zinc-600`}>Welcome home</Text>
      <Link style={tw`text-xl font-bold text-zinc-600`} href="/">Index</Link>
      <Link style={tw`text-xl font-bold text-zinc-600`} href="/Login">Login</Link>
    </View>
  )
}
