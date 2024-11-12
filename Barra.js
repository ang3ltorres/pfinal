import React, { Component } from 'react';
import { useEffect, useState } from "react";
import { View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, Text } from 'react-native';

const Barra = ({
}) => {

	const styles = StyleSheet.create({
		temp: {
			flex: 1,
			flexDirection: 'row',
			borderColor: 'magenta',
			borderWidth: 4,
			alignItems: 'center',
			justifyContent: 'center',
		},
		tempText: {
			flex: 2,
			fontSize: 32,
			fontWeight: 'bold'
		},
		tempImage: {
			flex: 1,
			width: 150,
			height: 150,
			resizeMode: 'contain',
			},
		titleBar: {
			flex: 2,
			fontSize: 48,
			textAlign: 'center',
			backgroundColor: 'white',
			fontWeight: 'bold',
			borderColor: 'magenta',
			borderWidth: 4,
		},
		loginStatus: {
			flex: 0.5,
			borderColor: 'green',
			backgroundColor: 'yellow',
			borderWidth: 4,
			alignItems: 'center',
			justifyContent: 'center'
		},

		container: {
			height: 100,
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
			// 

			let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=Guadalajara&aqi=no`);
			let json = await response.json();
			await setWeather(json.current);

			console.log(`https:${weather.condition.icon}`);

		}_async();
	},
	[]);


	return (
		<View style={styles.container}>
		<View style={styles.containerInternal}>

			<View style={styles.temp}>
				<Text style={styles.tempText}>{weather.temp_c}°C</Text>
				<Image
					style={styles.tempImage}
					source={{ uri: `https:${weather.condition.icon}` }}
				/>
			</View>

			<Text style={styles.titleBar}>Directorio UDG</Text>

			<View style={styles.loginStatus}>
				<TouchableOpacity>
					<Image style={{
						width: 80,
						resizeMode: 'contain',
					}}
						source={require('./images/user_icon.png')}
					/>
				</TouchableOpacity>
			</View>

		</View>
		</View>
	);
};

export default Barra;
