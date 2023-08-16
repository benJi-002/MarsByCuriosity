import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

import { globalStyle } from '../styles/style';

import MyForm from './MyForm';


export default function MainScreen({navigation}) {



	const onUpdateOptions = (camForView, camForGet, dateForView, dateForGet) => {

		navigation.navigate('CameraRollScreen', 
			{
				camera: camForView,
				date: dateForView
			}
		)

		// console.log(camForGet, dateForGet)
	
	};



	return (

		<ImageBackground
			style={styles.background}
			resizeMode='cover'
			source={require('../assets/backgroundMain.png')}
		>
			<View
				style={styles.formContainer}
			>

			<Text 
				style={[globalStyle.title, styles.title]}
			>
				Select Camera and Date
			</Text>

				<MyForm onUpdateOptions={onUpdateOptions}/>
			</View>
		</ImageBackground>
	
	);

}

const styles = StyleSheet.create({
	background: {
		flex: 1, 
		justifyContent: "center", 
		alignItems: "center",
		padding: 24
	},

	formContainer: {
		flex: 1,
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: "center",
		rowGap: 167
	}
});