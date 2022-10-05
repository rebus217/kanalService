import { Dimensions } from "react-native";

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
export const headerHeight = 118;

export function isTabled() {
    return deviceWidth >= 600;
}