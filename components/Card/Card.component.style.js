import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#ccc',
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: 5,
        padding: 20,
        borderRadius: 10,
    },
    img: {
        width: 115,
        height: 115,
        borderRadius: 100,
    },
    detailContainer: {
        flexDirection: "column",
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 25,
    }
});