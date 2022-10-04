import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home.screen';

export default function ProtectedNavigator() {
    const Stack = createNativeStackNavigator();

    return (
        <>
            <Stack.Screen
                name='HomeAnother'
                component={HomeScreen}
                options={{ title: 'Home Another' }}
            />
        </>
    )
}