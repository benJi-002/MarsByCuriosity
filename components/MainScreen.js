import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';

import { globalStyle } from '../styles/style';

import MyForm from './MyForm';


export default function MainScreen({navigation}) {

	const  [options, setOptions] = useState([
		{
			camera: '1', 
			date: '1'
		}
	]);


	const onUpdateOptions = (camera, dateForGet, dateForView) => {

		// setOptions(data);
		navigation.navigate('CameraRollScreen', 
			{
				camera: camera,
				date: dateForView
			}
		)

		// console.log(camera, date)
	};

	return (

		<View
		  	style={globalStyle.main}
		>


			<View style={globalStyle.main}>

				<MyForm onUpdateOptions={onUpdateOptions}/>

			</View>

		</View>
	);

}

const styles = StyleSheet.create({
	
});