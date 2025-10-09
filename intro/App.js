
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
      
      <Text>Contador:{contador} </Text> {/* comentarios con shit+alt+a */}
        {/* //<Button></Button> */}
        <Button title="Agregar" onPress={()=>setContador(contador+1)}/> {/* funcion flecha, apertura de autocierre, cosas mas simples */}
        <Button title="Quitar" onPress={()=>setContador(contador-1)}/>
        <Button title="Reiniciar" onPress={()=>setContador(0)}/>
        <StatusBar style="auto" /> 
        
      </View>
    
  );
}

//3.- Estilos: Zona de estetica y posicionamiento 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
