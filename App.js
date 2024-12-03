import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Principal from './Principal';
import DatosMaterias from './DatosMaterias';
import Directorio from './Directorio';
import Kardex from './Kardex';

// Create a Drawer Navigator
const Drawer = createDrawerNavigator();

const App = () => {
  const [pass, setPass] = useState(false);
  const [mail, setMail] = useState(null);
  const [logged, setLogged] = useState(true);
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://cuceimobile.space/Escuela/kardex.php');
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, [logged]);

  if (!data) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Principal">
        <Drawer.Screen
          name="Principal"
          children={() => <Principal mail={mail} pass={pass} userData={userData} setUserData={setUserData} />}
        />
        <Drawer.Screen
          name="DatosMaterias"
          children={() => <DatosMaterias logged={logged} data={data} userData={userData} setUserData={setUserData} />}
        />
        <Drawer.Screen
          name="Directorio"
          children={() => <Directorio mail={mail} pass={pass} userData={userData} setUserData={setUserData} />}
        />
        <Drawer.Screen
          name="Kardex"
          children={() => <Kardex logged={logged} data={data} mail={mail} pass={pass} userData={userData} setUserData={setUserData} />}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
