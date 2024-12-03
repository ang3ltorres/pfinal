import React from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Barra from './Barra';
import WebView from 'react-native-webview';

const Principal = ({
	mail, pass,
	userData, setUserData
}) => {
	return (
		<ImageBackground
			source={require('./images/background_3.png')}
			style={styles.container}
			resizeMode="cover"
		>

			<Barra title={'Principal'} mail={mail} userData={userData} setUserData={setUserData} />
			
			<View style={styles.buttonRow}>
				<TouchableOpacity>
				<LinearGradient
					colors={['#79bbff', '#378de5']}
					style={styles.buttons}
				>
					<Text style={[styles.buttonsText, styles.textShadow]}>RA</Text>
					<Image
						style={styles.image}
						source={require('./images/ra.png')}
					/>
				</LinearGradient>
				</TouchableOpacity>

				<TouchableOpacity>
				<LinearGradient
					colors={['#79bbff', '#378de5']}
					style={styles.buttons}
				>
					<Text style={[styles.buttonsText, styles.textShadow]}>Módulos</Text>
					<Image
						style={styles.image}
						source={require('./images/modulos.png')}
					/>
				</LinearGradient>
				</TouchableOpacity>
			</View>

			<View style={styles.buttonRow}>
				<TouchableOpacity>
				<LinearGradient
					colors={['#79bbff', '#378de5']}
					style={styles.buttons}
				>
					<Text style={[styles.buttonsText, styles.textShadow]}>Directorio</Text>
					<Image
						style={styles.image}
						source={require('./images/directorio.png')}
					/>
				</LinearGradient>
				</TouchableOpacity>

				<LinearGradient
					colors={['#ffffff', 'green']}
					style={[styles.buttons, {padding:0, margin:0, border:0}]}
				>
					<Text style={[styles.buttonsText, styles.textShadow, {fontSize: 32}]}>Mapa CUCEI</Text>
					<WebView style={{ padding:0, margin:0, border:0, width:'100%' }} source={{ uri: 'https://www.google.com.mx/maps/place/Centro+Universitario+de+Ciencias+Exactas+e+Ingenier%C3%ADas+(CUCEI),+Blvd.+Gral.+Marcelino+Garc%C3%ADa+Barrag%C3%A1n+1421,+Ol%C3%ADmpica,+44430+Guadalajara,+Jal./@20.6548611,-103.3254497,16z/data=!4m6!3m5!1s0x8428b23a9bbba' }} />
				</LinearGradient>
			</View>

		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	buttonRow: {
		flex: 1,
		flexDirection: 'row',
	},
	buttons: {
		paddingVertical: 12,
		paddingHorizontal: 44,
		margin: 20,
		shadowColor: '#1564ad',
		shadowOffset: { width: 3, height: 4 },
		shadowOpacity: 1,
		shadowRadius: 0,
		flex: 0.9,
		width: 440,
		borderRadius: 32
	},
	buttonsText: {
		fontSize: 64,
		color: 'black',
		fontWeight: 'bold',
		fontFamily: 'Arial',
		textAlign: 'center',
	},
	textShadow: {
		textShadowColor: '#528ecc',
		textShadowOffset: { width: 0, height: 1 },
		textShadowRadius: 0,
	},
	image: {
		width: 300,
		height: 300,
		resizeMode: 'contain',
		margin: 'auto'
	}
});

export default Principal;
