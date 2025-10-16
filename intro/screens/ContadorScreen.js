//1.- Imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Reactimport, { useState } from 'react';


//2.-Main: Zona de componentes
export default function App() {
  const [contador,setContador]=useState(0); //Desestructuración, aqui se inicia la variable
  return (
    // debe estar dentro de una etiqueta view para ser visible en mi screen
    <View style={styles.container}>
       <Text style={styles.texto} > Contador:</Text>
       <Text style={styles.texto2} >{contador}:</Text>
      {/* <Text>Contador:{contador} </Text> */} {/* comentarios con shit+alt+a */} {/* //<Button></Button> */}
       {/*  <Text>{contador} </Text> */}
       <View style={styles.botonesContainer}> 
        <Button title="Agregar" onPress={()=>setContador(contador+1) }color='#311c7cff'/> {/* funcion flecha, apertura de autocierre, cosas mas simples */}
        <Button title="Quitar" onPress={()=>setContador(contador-1)}color='#311c7cff'/>
        <Button title="Reiniciar" onPress={()=>setContador(0)}color='#311c7cff'/>
        </View>
        <StatusBar style="auto" /> 
      </View>
    
  );
}

//3.- Estilos: Zona de estetica y posicionamiento 
const styles = StyleSheet.create({
  container: {
    flex: 1, //especificar como se reparte la distribucion de la pantalla
    backgroundColor: '#e6e6e6ff',
    alignItems: 'center', //end, center, start
    justifyContent: 'center',
  },
  texto:{
    color: '#020202ff', 
    //color: '#98159cff', 
    fontSize: 30,   
    fontFamily: 'Times New Roman',
    fontWeigth: 'bold',
    fontStyle: 'italic',
    textDecorationLine:'line-through',
  },
  texto2:{
      fontSize: 35,   
    fontFamily: 'Courier',
    fontWeigth:700,
    fontStyle: 'normal',
    textDecorationLine:'underLine',
  },
  botonesContainer:{
   marginTop:15,
   flexDirection:'row',
   alignItems: 'center', //end, center, start
   justifyContent: 'center',
   gap:15,//separacion entre botones

  },
});
