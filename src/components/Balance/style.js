import { StyleSheet} from "react-native";


export const stylesBalance = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 8,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    },
    current: {
        flexDirection: "row",
        alignItems: "center",
    },
    item: {

    },
    itemTitle: {
        fontSize: 20,
        color: "#DADADA",
    },
    currencySimbol: {
        color: "#DADADA",
        marginRight: 10,
    },
    balance: {
        fontSize: 22,
        color: "#2ecc71"
    },
    expenses: {
        fontSize: 22,
        color: "#e74c3c"
    },
})