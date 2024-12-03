import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, Text, ScrollView } from 'react-native';
import Barra from './Barra';
import { PieChart } from 'react-native-chart-kit';

const DatosMaterias = ({ logged, data, mail, pass, userData, setUserData }) => {

  const screenWidth = Dimensions.get('window').width;

  const creditosAdquiridos = data["creditosAdquiridos"];
  const creditosRequeridos = data["creditosRequeridos"];

  const creditosAdquiridosEspObligatoria = data["creditosArea"][0]["creditosAdquiridos"];
  const creditosRequeridosEspObligatoria = data["creditosArea"][0]["creditosRequeridos"];

  const creditosAdquiridosEspSelectiva = data["creditosArea"][1]["creditosAdquiridos"];
  const creditosRequeridosEspSelectiva = data["creditosArea"][1]["creditosRequeridos"];

  const creditosAdquiridosOptAbierta = data["creditosArea"][2]["creditosAdquiridos"];
  const creditosRequeridosOptAbierta = data["creditosArea"][2]["creditosRequeridos"];

  const creditosAdquiridosBasComun = data["creditosArea"][3]["creditosAdquiridos"];
  const creditosRequeridosBasComun = data["creditosArea"][3]["creditosRequeridos"];

  const creditosAdquiridosBasParticular = data["creditosArea"][4]["creditosAdquiridos"];
  const creditosRequeridosBasParticular = data["creditosArea"][4]["creditosRequeridos"];

  const chartData = [
    {
      name: 'Adquiridos',
      creditos: creditosAdquiridos,
      color: 'green',
			legendFontSize: 24
    },
    {
      name: 'Faltantes',
      creditos: (creditosAdquiridos > creditosRequeridos) ? 0 : creditosRequeridos - creditosAdquiridos,
      color: 'orange',
			legendFontSize: 24
    },
  ];

  const charDataEspObligatoria = [
    {
      name: 'Adquiridos',
      creditos: creditosAdquiridosEspObligatoria,
      color: 'green',
			legendFontSize: 16
    },
    {
      name: 'Faltantes',
      creditos: (creditosAdquiridosEspObligatoria > creditosRequeridosEspObligatoria) ? 0 : creditosRequeridosEspObligatoria - creditosAdquiridosEspObligatoria,
      color: 'orange',
			legendFontSize: 16
    },
  ];

  const charDataEspSelectiva = [
    {
      name: 'Adquiridos',
      creditos: creditosAdquiridosEspSelectiva,
      color: 'green',
			legendFontSize: 16
    },
    {
      name: 'Faltantes',
      creditos: (creditosAdquiridosEspSelectiva > creditosRequeridosEspSelectiva) ? 0 : creditosRequeridosEspSelectiva - creditosAdquiridosEspSelectiva,
      color: 'orange',
			legendFontSize: 16
    },
  ];

  const charDataOptAbierta = [
    {
      name: 'Adquiridos',
      creditos: creditosAdquiridosOptAbierta,
      color: 'green',
			legendFontSize: 16
    },
    {
      name: 'Faltantes',
      creditos: (creditosAdquiridosOptAbierta > creditosRequeridosOptAbierta) ? 0 : creditosRequeridosOptAbierta - creditosAdquiridosOptAbierta,
      color: 'orange',
			legendFontSize: 16
    },
  ];

	const charDataBasComun = [
    {
      name: 'Adquiridos',
      creditos: creditosAdquiridosBasComun,
      color: 'green',
			legendFontSize: 16
    },
    {
      name: 'Faltantes',
      creditos: (creditosAdquiridosBasComun > creditosRequeridosBasComun) ? 0 : creditosRequeridosBasComun - creditosAdquiridosBasComun,
      color: 'orange',
			legendFontSize: 16
    },
  ];

  const charDataBasParticular = [
    {
      name: 'Adquiridos',
      creditos: creditosAdquiridosBasParticular,
      color: 'green',
			legendFontSize: 16
    },
    {
      name: 'Faltantes',
      creditos: (creditosAdquiridosBasParticular > creditosRequeridosBasParticular) ? 0 : creditosRequeridosBasParticular - creditosAdquiridosBasParticular,
      color: 'orange',
			legendFontSize: 16
    },
  ];

  return (
    <ImageBackground source={require('./images/background_6.png')} style={styles.container} resizeMode="cover">
      <Barra title={'Datos Materias'} mail={mail} userData={userData} setUserData={setUserData} />

			<ScrollView style={{padding: 24}}>

				<View style={styles.chartContainer}>
					<Text style={[styles.chartTitle, { margin: -8, marginBottom: -42 }]}>TOTALES</Text>
					<PieChart
						data={chartData}
						width={screenWidth}
						height={420}
						chartConfig={{
							color: () => `rgba(255, 255, 255, 1.0)`,
						}}
						accessor={"creditos"}
						backgroundColor={"transparent"}
						paddingLeft={"0"}
						center={[0, 0]}
						absolute
					/>
				</View>

				<View style={styles.chartRow}>
					<View style={styles.chartItem}>
						<Text style={styles.chartTitleSmall}>Especializante Obligatoria</Text>
						<PieChart
							data={charDataEspObligatoria}
							width={screenWidth / 2.2}
							height={220}
							chartConfig={{
								color: () => `rgba(255, 255, 255, 1.0)`,
							}}
							accessor={"creditos"}
							backgroundColor={"transparent"}
							paddingLeft={"0"}
							center={[0, 0]}
							absolute
						/>
					</View>

					<View style={styles.chartItem}>
						<Text style={styles.chartTitleSmall}>Especializante Selectiva</Text>
						<PieChart
							data={charDataEspSelectiva}
							width={screenWidth / 2.2}
							height={220}
							chartConfig={{
								color: () => `rgba(255, 255, 255, 1.0)`,
							}}
							accessor={"creditos"}
							backgroundColor={"transparent"}
							paddingLeft={"0"}
							center={[0, 0]}
							absolute
						/>
					</View>
				</View>

				<View style={styles.chartContainer}>
					<Text style={[styles.chartTitle, { margin: -8, marginBottom: -42 }]}>Básica Común</Text>
					<PieChart
						data={charDataBasComun}
						width={screenWidth}
						height={420}
						chartConfig={{
							color: () => `rgba(255, 255, 255, 1.0)`,
						}}
						accessor={"creditos"}
						backgroundColor={"transparent"}
						paddingLeft={"0"}
						center={[0, 0]}
						absolute
					/>
				</View>

				<View style={styles.chartRow}>
					<View style={styles.chartItem}>
						<Text style={styles.chartTitleSmall}>Optativa Abierta</Text>
						<PieChart
							data={charDataOptAbierta}
							width={screenWidth / 2.2}
							height={220}
							chartConfig={{
								color: () => `rgba(255, 255, 255, 1.0)`,
							}}
							accessor={"creditos"}
							backgroundColor={"transparent"}
							paddingLeft={"0"}
							center={[0, 0]}
							absolute
						/>
					</View>

					<View style={styles.chartItem}>
						<Text style={styles.chartTitleSmall}>Básica Particular</Text>
						<PieChart
							data={charDataBasParticular}
							width={screenWidth / 2.2}
							height={220}
							chartConfig={{
								color: () => `rgba(255, 255, 255, 1.0)`,
							}}
							accessor={"creditos"}
							backgroundColor={"transparent"}
							paddingLeft={"0"}
							center={[0, 0]}
							absolute
						/>
					</View>
				</View>

			</ScrollView>
     
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chartContainer: {
    alignItems: 'center',
    marginVertical: 0,
		backgroundColor: 'rgba(150, 150, 150, 0.7)',
		borderRadius: 48,
  },
  chartRow: {
    flexDirection: 'row',
    alignItems: 'center',
		backgroundColor: 'rgba(200, 200, 200, 0.7)',
		borderRadius: 48,
		margin: 16
  },
	chartItem: {
    alignItems: 'center',
    width: '50%',
  },
  chartContainerDouble: {
    alignItems: 'center',
    marginVertical: 0,
  },
	chartTitle: {
		fontSize: 48,
		fontWeight: 'bold'
	},
	chartTitleSmall: {
		fontSize: 32,
		fontWeight: 'regular'
	},
  legendContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  colorBox: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  legendText: {
    fontSize: 16,
    color: '#000',
  },
});

export default DatosMaterias;
