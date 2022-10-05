import { StyleSheet } from "react-native"
import { deviceHeight, headerHeight } from "../../components/common/helper"


const textParams = {
    fontFamily: "InterExtraBold",
    fontSize: 24,
    lineHeight: 29,
}

const invariable = {
    container: {
        alignItems: "center",
    },
    outerAuthContainer: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        borderWidth: 5,
        borderColor: "#27569C",

        shadowColor: " rgba(0, 0, 0, 0.25)",
        shadowOffset: { height: 0, width: 4 },
        shadowRadius: 4,
    },
    innerAuthContainer: {
        alignItems: "center",
    },
    title: {
        ...textParams,
        color: "#27569C",
        marginBottom: 25,
    },
    inputContainer: {
        width: "100%",
        justifyContent: "center",
        marginBottom: 25,
    },
    input: {
        backgroundColor: "#D9D9D9",
        borderRadius: 10,
        borderWidth: 4,
        borderColor: "#27569C",
        paddingHorizontal: 10
    },
    inputName: {
        ...textParams,
        color: "#000000",
    },
    submitButton: {
        borderRadius: 10,
        backgroundColor: "#E4B062",
        alignItems: "center",
        justifyContent: "center",
        width: 213,
        height: 43,
    },
    submitButtonText: {
        ...textParams,
        color: "#000000",
    }


}

export const loginStylesPhone = StyleSheet.create({
    container: {
        height: deviceHeight,
        ...invariable.container,
    },
    outerAuthContainer: {
        height: 333,
        width: 290,
        marginTop: 14,
        ...invariable.outerAuthContainer,
    },
    innerAuthContainer: {
        ...invariable.innerAuthContainer,
        width: 212,
    },
    title: {
        ...invariable.title,
        height: 45,
        marginBottom: 0,
    },
    inputContainer: {
        ...invariable.inputContainer,
        marginBottom: 13,
    },
    input: {
        ...invariable.input,
    },
    inputName: {
        ...invariable.inputName,
        marginBottom: 13,
    },
    submitButton: {
        ...invariable.submitButton,
    },
    submitButtonText: {
        ...invariable.submitButtonText,
    }
})

export const loginStylesTablet = StyleSheet.create({
    container: {
        height: deviceHeight - headerHeight,
        justifyContent: "center",
        ...invariable.container,
    },
    outerAuthContainer: {
        width: 480,
        height: 330,
        ...invariable.outerAuthContainer,
    },
    innerAuthContainer: {
        ...invariable.innerAuthContainer,
        width: 440,
    },
    title: {
        ...invariable.title,
        height: 61,
    },
    inputContainer: {
        ...invariable.inputContainer,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    input: {
        ...invariable.input,
        width: 295,
    },
    inputName: {
        ...invariable.inputName,
    },
    submitButton: {
        ...invariable.submitButton,
    },
    submitButtonText: {
        ...invariable.submitButtonText,
    }
})

