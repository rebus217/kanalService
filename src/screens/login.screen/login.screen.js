import react, { useState } from "react";
import { View, TextInput, Button, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { isTabled } from "../../components/common/helper";
import Header from "../../components/header.component";
import { setUser } from "../../store/slices/user.slice";
import { loginStylesPhone, loginStylesTablet } from "./login.styles"
import { useFonts } from 'expo-font';



const styles = isTabled() ? loginStylesTablet : loginStylesPhone

export default function LoginScreen({ navigation }) {
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const dispatch = useDispatch()

    function signIn() {
        dispatch(setUser({ login: login, password: password }))
    }

    const [loaded] = useFonts({
        InterExtraBold: require('../../../assets/fonts/Inter-ExtraBold.ttf'),
    });

    if (!loaded) {
        return null;
    }


    return (
        <View>
            <Header />
            <View style={styles.container} >
                <View style={styles.outerAuthContainer}>
                    <View style={styles.innerAuthContainer}>
                        <Text style={styles.title}>Autorization</Text>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputName}>login</Text>
                            <TextInput
                                value={login}
                                onChangeText={setLogin}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputName}>password</Text>
                            <TextInput
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                                style={styles.input}
                            />
                        </View>

                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={() => signIn()}
                        >
                            <Text style={styles.submitButtonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

    )
}