import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

import { globalStyle } from '../styles/style';
import useService from '../services/MarsByCuriosityService';

import MyForm from './MyForm';


export default function MainScreen({navigation}) {

	const [newItemLoading, setNewItemLoading] = useState(false);
	const [photos, setPhotos] = useState([]);
	
	const {loading, error, getPhotos} = useService();

	const onUpdateOptions = async (camForView, camForGet, dateForView, dateForGet) => {

		if (camForView && dateForView) {

			onRequest(dateForGet, camForGet, true)

			console.log(dateForView)
		
			navigation.navigate('CameraRollScreen', 
				{
					camera: camForView,
					date: dateForView,
					items: photos,
					date: dateForView
				}
			)
		}
	};
	
	const onRequest = (date, camera, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true)
        getPhotos(date, camera)
            .then(onPhotosLoaded)
    }

	const onPhotosLoaded = (newPhotos) => {
		console.log([...newPhotos])
        setPhotos(photos => [...newPhotos]);
        setNewItemLoading(newItemLoading => false);

    }


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