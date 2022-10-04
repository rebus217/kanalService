import { Dimensions } from "react-native";


export function isTabled() {
    let deviceWidth = Dimensions.get('window').width

    return deviceWidth >= 768
}