import { Link, Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View, Dimensions } from "react-native";
import tw from 'twrnc'
import { app } from '../firebaseConfig';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const { width } = Dimensions.get('window');
const isMobile = width < 600;

export default function Layout() {
    // const [userAuthenticated, setUserAuthenticated] = useState(false)

    useEffect(() => {
        StateListener()
    }, [])

    const StateListener = () => {
        const auth = getAuth(app);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // setUserAuthenticated(true)
                const uid = user.uid;
                console.log(uid)
                router.push("/")

            } else {
                // setUserAuthenticated(false)
                console.log("not logged in")
                router.push("/login/Login")

            }
        });
    }

    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: false
            }} />
            <Stack.Screen name="Home" options={{
                headerShown: false
            }} />
            <Stack.Screen name="Login" options={{
                headerShown: false
            }} />
            {/* <Stack.Screen name="Dashboard"/>
        <Stack.Screen name="Profile"/>
        <Stack.Screen name="Settings"/>
        <Stack.Screen name="Notifications"/>
        <Stack.Screen name="Messages"/> */}
        </Stack>

    );
}
