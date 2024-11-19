import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ImageBackground, Text, ScrollView } from 'react-native';
import Barra from './Barra';

const DatosMaterias = () => {

	return (
		<ImageBackground source={require('./images/background_6.png')} style={styles.container} resizeMode='cover'>
		<Barra title={'Datos Materias'} />

		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default DatosMaterias;
