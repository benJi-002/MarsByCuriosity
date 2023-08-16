import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Text, Image, TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Svg, {Path} from 'react-native-svg'

import { globalStyle } from '../styles/style';


export default function CameraRollScreen({route, navigation}) {

	const [items, setItems] = useState([
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
		{img: 'https://64.media.tumblr.com/7caf8344e8ad8740ead97532784acfbe/tumblr_pp055cmfxb1vk2rpjo1_1280.jpg'},
	]);

	const BackIcon = () => {
		return (
			<Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<Path d="M14.5 6.5L10.2071 10.7929C9.81658 11.1834 9.81658 11.8166 10.2071 12.2071L14.5 16.5" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
			</Svg>
		);
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
					onPress={() => navigation.navigate('MainScreen')}
				>
					<BackIcon/>
				</TouchableOpacity>
			</View>

			    <FlatGrid
					itemDimension={100}
					data={items}
					style={styles.gridView}
					// staticDimension={300}
					// fixed
					spacing={8}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() => navigation.navigate('ImageScreen', item)}
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
		</View>
	);

}

const styles = StyleSheet.create({

	main: {
		paddingRight: 8,
		paddingLeft: 8,
		paddingBottom: 0,
		backgroundColor: '#DCCEBE',
	},	

	header: {
		height: 88
	},

	backIcon: {
		position: 'absolute',
		top: 60,
		left: 9
	},

	image: {
		width: '100%',
		height: '100%',
		borderRadius: 8,
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