import { StatusBar } from "expo-status-bar";
import react from "react";
import { SafeAreaView, View, StyleSheet, Dimensions } from "react-native";
import LogoIcon from "../icons/logoIcon.svg"
import LogoIconMini from "../icons/logoIconMini.svg"
import { deviceWidth, headerHeight, isTabled } from "./common/helper";

export default function Header() {
    return (
        <SafeAreaView style={styles.container}>
            {isTabled() ? (
                <LogoIcon />
            ) : (
                <LogoIconMini />
            )
            }
            <StatusBar hidden={true} />
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        height: headerHeight,
        width: deviceWidth,
        backgroundColor: "#E4B062",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: "5%",
    },
})