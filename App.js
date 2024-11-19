import React from 'react';
import { useEffect, useState } from "react";
import { SafeAreaView, Text } from 'react-native';
import Login from './Login';
import { NavigationContainer } from '@react-navigation/native';
import Directorio from './Directorio';
import Principal from './Principal';
import Kardex from './Kardex';

const App = () => 
{
	const [mail, setMail] = useState(null);
	const [pass, setPass] = useState(null);

	return (

			<Kardex />

	);
}

export default App;
