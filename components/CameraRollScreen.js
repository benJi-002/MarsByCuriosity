import React, { useState } from 'react';
import { 
	StyleSheet, 
	View, 
	Text, 
	Image, 
	TouchableOpacity 
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Svg, {Path} from 'react-native-svg';
import { CommonActions } from '@react-navigation/native';

import { globalStyle } from '../styles/style';


export default function CameraRollScreen({route, navigation}) {

	const BackIcon = () => {
		return (
			<Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<Path d="M14.5 6.5L10.2071 10.7929C9.81658 11.1834 9.81658 11.8166 10.2071 12.2071L14.5 16.5" stroke="black" strokeWidth="1.7" strokeLinecap="round"/>
			</Svg>
		);
	}

	const Photos = () => {
		return (
			<FlatGrid
				itemDimension={100}
				data={route.params.items}
				style={styles.gridView}
				// staticDimension={300}
				// fixed
				spacing={8}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate('ImageScreen', {item: item, date: route.params.date})}
						style={styles.itemContainer}
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
		)
	}

	const EmptyLabel = () => {
		return (
			<Text style={[globalStyle.light, styles.emptyLabel]}>
				Sorry, unfortunately no photos were taken with this camera on this day
			</Text>
		)
	}

	return (
		<View
			style={[globalStyle.main, styles.main]}
		>
			<View style={styles.header}>
				<Text style={[globalStyle.title]}>{route.params.camera}</Text>

				<Text style={[globalStyle.subTitle]}>{route.params.date}</Text>

				<TouchableOpacity 
					style={styles.backIcon}
					onPress={() => navigation.dispatch(CommonActions.goBack())}
				>
					<BackIcon/>
				</TouchableOpacity>
			</View>

			{route.params.items.length !== 0 ? <Photos/> : <EmptyLabel/>}

		</View>
	);

}

const styles = StyleSheet.create({

	main: {
		paddingTop: 0,
		paddingRight: 8,
		paddingBottom: 0,
		paddingLeft: 8,
		backgroundColor: '#DCCEBE',
	},	

	header: {
		height: 88
	},

	backIcon: {
		position: 'absolute',
		bottom: 9,
		left: 9
	},

	image: {
		width: '100%',
		height: '100%',
		borderRadius: 8,
 	},

	emptyLabel: {
		fontSize: 22,
		textAlign: 'center',
		marginTop: '70%'
	},


	gridView: {
		marginTop: 16,
		flex: 1,
	},

	itemContainer: {
		justifyContent: 'flex-end',
		height: 110,
	}
});