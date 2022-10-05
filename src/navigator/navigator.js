import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/login.screen/login.screen";
import ProtectedNavigator from "./protectedNavigator";

export default function Navigator() {
    const Stack = createNativeStackNavigator();
    const user = useSelector(state => state.user.user);
    const [isSignedIn, setisSignedIn] = useState(false);


    useEffect(() => {
        if (user.login === "test" && user.password === "test") {
            setisSignedIn(true)
        } else setisSignedIn(false)
    }, [user]);


    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {isSignedIn ? (
                ProtectedNavigator()
            ) : (
                <Stack.Screen name='Login' component={LoginScreen} />
            )}

        </Stack.Navigator>
    )
}