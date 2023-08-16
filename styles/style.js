import { StyleSheet } from 'react-native';

export const globalStyle = StyleSheet.create({
    
    main: {
        flex: 1,
        padding: 24
    },

    bold: {
        fontFamily: 'd-bold'
    },

    light: {
        fontFamily: 'd-light'
    },
    
    title: {
        fontSize: 18,
        color: '#000',
        fontFamily: 'd-bold',
        textAlign: 'center',
        marginTop: 42,
        lineHeight: 22,
    },

    subTitle: {
        color: '#000',
        fontSize: 13,
        lineHeight: 22,
        textAlign: 'center',
        fontFamily: 'd-light',
    }
});