import React, { Component } from 'react';
import { useEffect, useState } from "react";
import { View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import Barra from './Barra';

const Directorio = ({
	mail, pass,
	userData, setUserData
}) => {

	return (
		<View style={styles.container}>
			<Barra title={'Directorio'} mail={mail} userData={userData} setUserData={setUserData} />
			<WebView source={{ uri: 'https://www.udg.mx/es/directorio' }} style={styles.webContainer} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	webContainer: {
		flex: 1,
		height: 100,
	},
});

export default Directorio;
