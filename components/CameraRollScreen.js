import React from 'react';
import { StyleSheet, FlatList, View, Text, Image, TouchableOpacity } from 'react-native';

import { globalStyle } from '../styles/style';


export default function CameraRollScreen({route, navigation}) {


	return (
		<View
			style={[globalStyle.main]}
		>

			<Text style={[globalStyle.title, styles.camera]}>{route.params.camera}</Text>

			<Text style={[globalStyle.title, styles.date]}>{route.params.date}</Text>

			<FlatList 
				data={[{img: 'https://static-cse.canva.com/blob/661745/svi_1002.png'},{img: 'https://static-cse.canva.com/blob/661745/svi_1002.png'},{img: 'https://static-cse.canva.com/blob/661745/svi_1002.png'},{img: 'https://static-cse.canva.com/blob/661745/svi_1002.png'},{img: 'https://static-cse.canva.com/blob/661745/svi_1002.png'},{img: 'https://static-cse.canva.com/blob/661745/svi_1002.png'},{img: 'https://static-cse.canva.com/blob/661745/svi_1002.png'},{img: 'https://static-cse.canva.com/blob/661745/svi_1002.png'},{img: 'https://static-cse.canva.com/blob/661745/svi_1002.png'},{img: 'https://static-cse.canva.com/blob/661745/svi_1002.png'},]}
				renderItem={({item}) => (
					<TouchableOpacity 
						onPress={() => navigation.navigate('ImageScreen', item)}
						style={styles.item}	
					>
						<Image 
							style={styles.image}
							source={{
								uri: item.img
							}}
						/>
					</TouchableOpacity>
				)}
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