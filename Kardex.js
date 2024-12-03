import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ImageBackground, Text, ScrollView } from 'react-native';
import Barra from './Barra';

const randomColor = (index) => {
	const lightGray = '#F5F5F5';
	const darkGray = '#D3D3D3';
	return index % 2 === 0 ? lightGray : darkGray;
};

const MateriaKardex = ({ descripcion, nrc, clave, fecha, ciclo, calificacion, creditos, tipo, color }) => (
	<View style={[styles.materiaCard, { backgroundColor: color }]}>
		<Text style={styles.materiaTitle}>{descripcion}</Text>
		<Text style={styles.materiaInfo}>NRC: {nrc} | Clave: {clave}</Text>
		<Text style={styles.materiaInfo}>Fecha: {fecha} | Ciclo: {ciclo}</Text>
		<Text style={styles.materiaInfo}>Calificación: {calificacion} | Créditos: {creditos}</Text>
		<Text style={styles.materiaInfo}>Tipo: {tipo}</Text>
	</View>
);

const Kardex = ({
	logged, data,
	mail, pass,
	userData, setUserData
}) => {

	return (
		<ImageBackground source={require('./images/background_4.png')} style={styles.container} resizeMode='cover'>
			<Barra title={'Kardex'} mail={mail} userData={userData} setUserData={setUserData} />

			<ImageBackground source={require('./images/background_5.png')} style={styles.topImage} resizeMode='stretch'>
				<Text style={styles.mediumText}>     Créditos: {data.creditosAdquiridos}/{data.creditosRequeridos}</Text>
				<Text style={styles.mediumText}>     Tipo de certificado: {data.tipoCertificado}</Text>
				<Text style={styles.mediumText}>     Promedio: {data.promedio}</Text>
			</ImageBackground>

			<ScrollView contentContainerStyle={styles.scrollContainer}>
				{data.materias.map((materia, index) => (
					<MateriaKardex key={index} {...materia} color={randomColor(index)} />
				))}
			</ScrollView>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1 },
	topImage: { height: 150, justifyContent: 'center', alignItems: 'left'},
	mediumText: { fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 26, color: 'white' },
	scrollContainer: { paddingHorizontal: 15, paddingBottom: 15 },
	materiaCard: {
		borderRadius: 6,
		padding: 6,
		marginBottom: 10,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowRadius: 5,
		elevation: 3,
	},
	materiaTitle: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#041835',
		marginBottom: 5,
	},
	materiaInfo: {
		fontSize: 20,
		color: 'black',
		fontWeight: 'bold',
		marginBottom: 4, 
	},
});

export default Kardex;
