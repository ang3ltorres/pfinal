import React from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Barra from './Barra';
import WebView from 'react-native-webview';

const Principal = ({
	mail, pass
}) => {
	return (
		<ImageBackground
			source={require('./images/background_3.png')}
			style={styles.container}
			resizeMode="cover"
		>

			<Barra title={'Principal'} mail={mail} />
			
			<View style={styles.buttonRow}>
				<TouchableOpacity>
				<LinearGradient
					colors={['#79bbff', '#378de5']}
					style={styles.buttons}
				>
					<Text style={[styles.buttonsText, styles.textShadow]}>RA</Text>
				</LinearGradient>
				</TouchableOpacity>

				<TouchableOpacity>
				<LinearGradient
					colors={['#79bbff', '#378de5']}
					style={styles.buttons}
				>
					<Text style={[styles.buttonsText, styles.textShadow]}>Módulos</Text>
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
					style={styles.buttons}
				>
					<Text style={[styles.buttonsText, styles.textShadow]}>Mapa</Text>
					<WebView source={{ uri: 'https://www.google.com.mx/maps/@20.6561034,-103.3235243,16z' }} />
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
