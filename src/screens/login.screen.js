import react, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import Header from "../components/header.component";
import { setUser } from "../store/slices/user.slice";


export default function LoginScreen({ navigation }) {
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const dispatch = useDispatch()

    function signIn() {
        dispatch(setUser({ login: login, password: password }))
    }

    return (
        <View>
            <Header />
            <TextInput
                placeholder="Login"
                value={login}
                onChangeText={setLogin}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button
                title="Sign In"
                onPress={() => signIn()}
            />
        </View>
    )
}