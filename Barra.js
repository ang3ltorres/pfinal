import React, { Component } from 'react';
import { useEffect, useState } from "react";
import { View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, Text } from 'react-native';

const Barra = ({
	title
}) => {

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
	});

	const [weather, setWeather] = useState(null);

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


	return (
		<View style={styles.container}>
		<ImageBackground
			source={require('./images/background_2.png')}
			style={styles.containerInternal}
			resizeMode="cover"
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

			<TouchableOpacity style={styles.loginStatus}>
				<Image style={{
					width: 80,
					resizeMode: 'contain',
				}}
				source={require('./images/user_icon.png')}
				/>
			</TouchableOpacity>

		</ImageBackground>
		</View>
	);
};

export default Barra;
