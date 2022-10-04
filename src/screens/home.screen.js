import react from "react";
import { View, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { dropUser } from "../store/slices/user.slice";

export default function HomeScreen({ navigation }) {
    const dispatch = useDispatch()

    function logOut() {
        dispatch(dropUser())
    }

    return (
        <View>
            <Text>
                Home Screen
            </Text>
            <Button
                title="Go to login"
                onPress={() => navigation.navigate('HomeAnother')}
            />
            <Button
                title="LogOut"
                onPress={() => logOut()}
            />
        </View>
    )
}