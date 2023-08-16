import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    Image, 
    TouchableOpacity,
    Share
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import { CommonActions } from '@react-navigation/native';
import * as Sharing from 'expo-sharing';

import { globalStyle } from '../styles/style';


export default function ImageScreen ({route, navigation}) {

    const onShare = async (url) => {
        try {
            const result = await Share.share({
                message: ('Mars by Curiosity: ' + '\n' + '\n' + url),
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    console.log('shared with activity type of: ', result.activityType)
                
                } else {
                    console.log('shared')
                }
            } else if (result.action === Share.dismissedAction) {
                console.log('dismissede')
            }
        }

        catch (error) {
            console.log(error.message)
        }
    }

    const BackIcon = () => {
		return (
			<Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<Path d="M14.5 6.5L10.2071 10.7929C9.81658 11.1834 9.81658 11.8166 10.2071 12.2071L14.5 16.5" stroke="#fff" strokeWidth="1.7" strokeLinecap="round"/>
			</Svg>
		);
	}

    const UploadIcon = () => {
        return (
            <Svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M8.02142 1.19051V13.2315" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M5.10632 4.11884L8.02132 1.19084L10.9373 4.11884" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M3.5 8H3C1.89543 8 1 8.89543 1 10V18.5C1 19.6046 1.89543 20.5 3 20.5H13C14.1046 20.5 15 19.6046 15 18.5V10C15 8.89543 14.1046 8 13 8H12.5" stroke="#fff" strokeWidth="1.7" strokeLinecap="round"/>
            </Svg>
        );
    }


    return (

        <View
            style={[globalStyle.main, styles.main]}
        >
            <View style={styles.header}>
				<Text style={[globalStyle.subTitle, styles.subTitle]}>Photo ID</Text>

				<Text style={[globalStyle.title, styles.title]}>{route.params.id}</Text>

				<TouchableOpacity 
					style={styles.backIcon}
					onPress={() => navigation.dispatch(CommonActions.goBack())}
				>
					<BackIcon/>
				</TouchableOpacity>

				<TouchableOpacity 
					style={styles.uploadIcon}
					onPress={() => onShare(route.params.img)}
				>
					<UploadIcon/>
				</TouchableOpacity>
			</View>

            <View style={styles.imgContainer}>
                <Image 
                    style={styles.image}
                    source={{
                        uri: route.params.img
                    }}
                />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({

    main: {
        paddingTop: 0,
		paddingRight: 16,
		paddingBottom: 34,
		paddingLeft:16,
		backgroundColor: '#000',
	},	

    subTitle: {
        marginTop: 42,
        color: '#fff'
    },
    
    title: {
        marginTop: 0,
        color: '#fff'
    },

    backIcon: {
		position: 'absolute',
		bottom: 9,
		left: 9
	},

    uploadIcon: {
        position: 'absolute',
        right: 4,
        bottom: 9
    },

    imgContainer: {
        height: '87%'
    },

    image: {
		width: '100%',
		height: '100%',
		marginTop: 16,
        borderRadius: 8
 	}
});