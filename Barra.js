import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, Text } from 'react-native';
import { Modal, TouchableWithoutFeedback } from 'react-native';

import { GoogleSignin, GoogleSigninButton, statusCodes, isErrorWithCode, isSuccessResponse, isNoSavedCredentialFoundResponse } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
	webClientId: 'autoDetect',
  offlineAccess: false,
  forceCodeForRefreshToken: true,
});

const Barra = ({
	title, mail,
	userData, setUserData
}) => {

	async function signIn()
	{
		try {
			await GoogleSignin.hasPlayServices();
			const userInfo = await GoogleSignin.signIn();
			await setUserData(userInfo);
			console.log('User Info:', userInfo);
		} catch (error) {
			console.error('Error during Google Sign-In:', error);
		}
	};

	const [weather, setWeather] = useState(null);
	const [modalVisible, setModalVisible] = useState(false);

	useEffect( () => {
		async function _async() {
			const apikey = '35381897bdd1449abe4193533240209';
			const city = 'Guadalajara';
			let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`);
			let json = await response.json();
			await setWeather(json.current);

		}_async();
	},
	[]);


	function renderModal(logged)
	{
		return (logged) ?
		(
			<>
				<Text style={styles.modalText}>¡Hola, USER!</Text>
									
				<TouchableOpacity onPress={() => setModalVisible(false)}>
					<Text style={styles.settingsButton}>Ajustes</Text>
				</TouchableOpacity>
	
				<TouchableOpacity onPress={() => setModalVisible(false)}>
					<Text style={styles.closeButton}>Cerrar sesión</Text>
				</TouchableOpacity>
			</>
		)
		: (
			<>
				<Text style={styles.modalText}>¡Hola, Invitado!</Text>
				<TouchableOpacity onPress={() => {setModalVisible(false); signIn()}}>
					<Text style={styles.settingsButton}>iniciar sesión</Text>
				</TouchableOpacity>
			</>
		)
	}

	return (
		<View style={styles.container}>
		<ImageBackground
			source={require('./images/background_2.png')}
			style={styles.containerInternal}
			resizeMode='cover'
		>
			
			<View style={styles.temp}>
				<Text style={styles.tempText}>{weather ? weather.temp_c : 0}°C</Text>
				<Image
					style={styles.tempImage}
					source={{ uri: `https:${weather ? weather.condition.icon : '//cdn-icons-png.flaticon.com/512/831/831682.png	'}` }}
				/>
			</View>

			<Image
				style={styles.cucei}
				source={require('./images/cucei.png')}
			/>
			<Text style={styles.titleBar}>{title}</Text>

			<TouchableOpacity style={styles.loginStatus} onPress={() => setModalVisible(true)}>
				<Image style={{
					width: 80,
					resizeMode: 'contain',
				}}
				source={require('./images/user_icon.png')}
				/>
			</TouchableOpacity>

			<Modal
				transparent={true}
				visible={modalVisible}
				animationType='fade'
				>
				<TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
					<View style={styles.modalContainer}>
					<TouchableWithoutFeedback>
						<View style={styles.modalContent}>

							{renderModal(mail != null)}
							
						</View>
						</TouchableWithoutFeedback>
					</View>
				</TouchableWithoutFeedback>
			</Modal>

		</ImageBackground>
		</View>
	);
};


const styles = StyleSheet.create({
	temp: {
		flex: 0.5,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'white',
		borderWidth: 6,
		borderRadius: 32,
		margin: 12
	},
	tempText: {
		flex: 1,
		fontSize: 42,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
	},
	tempImage: {
		flex: 1,
		marginTop: 16,
		height: 100,
		resizeMode: 'contain',
	},
	cucei: {
		flex: 0.12,
		height: 110,
		resizeMode: 'contain',
		margin: 8,
	},
	titleBar: {
		flex: 0.7,
		fontSize: 60,
		textAlign: 'center',
		marginTop: 24,
		color: 'white',
		fontWeight: 'bold',
	},
	loginStatus: {
		flex: 0.2,
		backgroundColor: 'white',
		borderRadius: 32,
		borderWidth: 4,
		alignItems: 'center',
		justifyContent: 'center',
	},
	container: {
		height: 130,
		backgroundColor: 'white',
	},
	containerInternal: {
		flex: 1,
		flexDirection: 'row',
	},
	modalContainer: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalContent: {
		position: 'absolute',
		top: 50,
		right: 10,
		width: 200,
		padding: 20,
		backgroundColor: 'white',
		alignItems: 'center',
		borderRadius: 10,
	},
	modalText: {
		fontSize: 24,
		color: 'black',
		backgroundColor: 'rgba(200, 200, 200, 1.0)',
		borderRadius: 4
	},
	settingsButton: {
		fontSize: 20,
		marginTop: 10,
		color: 'blue',
	},
	closeButton: {
		fontSize: 20,
		marginTop: 10,
		color: 'red',
	},
});

export default Barra;
