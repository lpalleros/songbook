import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: 5,
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 2, }, 
        shadowOpacity: 0.25,
        shadowRadius: 3.84, 
        elevation: 5,
        // fontFamily: "Cochin"
    },
    img: {
        width: 105,
        height: 105,
        borderRadius: 100,
    },
    detailContainer: {
        flexDirection: "column",
        paddingLeft: 10,
        width: 210,
    },
    link: {
        marginTop: 'auto',
        marginLeft: 'auto',
    },
    title: {
        fontSize: 25,
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 24,
        letterSpacing: 0.15,
    }
});