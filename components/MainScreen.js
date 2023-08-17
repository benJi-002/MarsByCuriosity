import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';
import Svg, {G, Circle} from 'react-native-svg'

import { globalStyle } from '../styles/style';
import useService from '../services/MarsByCuriosityService';

import MyForm from './MyForm';


export default function MainScreen({navigation}) {

	
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [photos, setPhotos] = useState([]);
	const [params, setParams] = useState([]);
	
	useEffect(() => {
		
		if (!newItemLoading && !loading && params.length !== 0) {
							
			navigation.navigate('CameraRollScreen', 
				{
					camera: params.camera,
					date: params.date,
					items: photos
				}
			)
		}

	}, [photos, params])

	const {loading, getPhotos} = useService();

	const onUpdateOptions = (camForView, camForGet, dateForView, dateForGet) => {

		
		if (camForView && dateForView) {
			
			setParams(params => (
				{
					camera: camForView,
					date: dateForView
				}
			));

			onRequest(dateForGet, camForGet, true)

		
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

	const Spinner = () => {
        return (
			<Image
				style={styles.spinner}
				source={require('../assets/spinner.gif')}
			/>
        )
    }

	const spinner = loading && !newItemLoading ? <Spinner/> : null;

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

				{spinner}
				
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
	},

	spinner: {
		position: 'absolute',
		width: 70,
		height: 70,
		top: '13%'
	}
});