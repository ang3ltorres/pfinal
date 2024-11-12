import React from 'react';
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

const Login = ({
	mail, setMail,
	pass, setPass
}) => {

	const [register, setRegister] = useState(false);
	const [passConfirmation, setPassConfirmation] = useState('');

	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.background}
				source={require('./images/background.png')}
			>
				<View style={styles.inputContainer}>
					<Image
						style={styles.udgLogo}
						resizeMode='contain'
						source={require('./images/udg_logo.png')}
					/>

					<TextInput
						placeholder='Correo de alumno'
						style={styles.input}
						onChangeText={setMail}
					/>
					<TextInput
						placeholder='Contraseña'
						style={styles.input}
						onChangeText={setPass}
						secureTextEntry
					/>

					{register ? <TextInput
						placeholder='Repetir Contraseña'
						style={styles.input}
						onChangeText={setPassConfirmation}
						secureTextEntry
					/> : <></>}

					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>{register ? "Registro" : "Login"}</Text>
					</TouchableOpacity>

					<TouchableOpacity style={[styles.button, styles.bottomLeftButton]} onPress={() => {setRegister(!register)}}>
						<Text style={styles.buttonText}>{register ? "Ya tienes cuenta?" : "Nuevo registro"}</Text>
					</TouchableOpacity>

				</View>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	background: {
		width: '100%',
		height: '100%',
	},
	udgLogo: {
		width: '30%',
		height: '25%'
	},
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		borderColor: 'black',
		backgroundColor: 'white',
		borderRadius: 16,
		borderWidth: 4,
		fontSize: 38,
		textAlign: 'center',
		color: 'black',
		width: '50%',
		marginBottom: 20,
	},
	button: {
		borderRadius: 12,
		backgroundColor: 'black',
		paddingVertical: 10,
		paddingHorizontal: 40,
		marginTop: 20,
	},
	buttonText: {
		color: 'white',
		fontSize: 32,
		fontWeight: 'bold',
	},
	bottomLeftButton: {
		position: 'absolute',
		bottom: 20,
		left: 20,
	},
});

export default Login;
