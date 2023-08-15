import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { globalStyle } from '../styles/style';


export default function ImageScreen ({route}) {


    return (

        <View
            style={[globalStyle.main, styles.main]}
        >

            <Image 
                style={styles.image}
                source={{
                    uri: route.params.img
                }}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    image: {
		width: "100%",
		height: 100,
		marginTop: 10
 	}
});