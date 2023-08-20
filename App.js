import React, {useState, useEffect, useCallback} from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';


import MainStack from './navigation/navigate';


SplashScreen.preventAutoHideAsync();


export default function App() {

	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {

		async function prepare() {
		  try {

			await Font.loadAsync({
				'd-bold': require('./assets/fonts/Dosis-SemiBold.ttf'),
				'd-light': require('./assets/fonts/Dosis-Regular.ttf')
			});

		  } catch (e) {

			  console.warn(e);
		  } finally {

			  setAppIsReady(true);
		  }
		}
	
		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {

		  await SplashScreen.hideAsync();
		}
	}, [appIsReady]);
	
	if (!appIsReady) {
		return null;
	}


	return (
		<>
			<MainStack onLayout={onLayoutRootView}/>

			<StatusBar backgroundColor='#DCCEBE' translucent={true}/>
		</>
	);

}

const styles = StyleSheet.create({

});
