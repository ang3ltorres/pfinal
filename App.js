import React from 'react';
import { useEffect, useState } from "react";
import { SafeAreaView, Text } from 'react-native';
import Login from './Login';
import { NavigationContainer } from '@react-navigation/native';
import Directorio from './Directorio';
import Principal from './Principal';
import Kardex from './Kardex';
import DatosMaterias from './DatosMaterias';
import { ActivityIndicator } from 'react-native';

const App = () => 
{
	const [pass, setPass] = useState(false);
	const [mail, setMail] = useState(null);
	const [logged, setLogged] = useState(true);
	const [data, setData] = useState(null)

	useEffect(() => {
		async function fetchData() {
			const response = await fetch('https://cuceimobile.space/Escuela/kardex.php');
			const json = await response.json();
			setData(json);
		}
		fetchData();
	}, [logged])

	return (
    <>
      {data ? (
        <DatosMaterias logged={logged} data={data} />
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </>
	);
}

export default App;
