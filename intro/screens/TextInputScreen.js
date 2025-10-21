import React,{useState} from 'react';//importar nuestro hook
import {View, Text,TextInput,Button,Alert,StyleSheet,Platform}from 'react-native';

export default function TextInputScreen(){
  const[nombre,setNombre]=useState('');
  const[contra,setContra]=useState('');
  const[multexto,setMultexto]=useState('');
  const mostrarAlerta=()=>{
    if(nombre.trim()=== ''){
      if(Platform.OS === 'web'){
        alert('Por favor, escribe tu nombre antes de continuar.');
      }else{
        Alert.alert(
          'Atencion',
          'Por favor, escribe tu nombre antes de continuar',
          [
            {text:'cancelar'},
            {text:'aceptar'}
          ]
        )
      }
    }
    else{
      if(Platform.OS==='web'){
        alert(`Bienvenido, ${nombre}!`);
      }
      else{
        Alert.alert(
          'Hola',`Bienvenido, ${nombre}!`,
          [
            {text:'cancelar'},
            {text:'aceptar'}
          ]
        );
      }
    }
  };
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Practica: TextInput & Alert</Text>
      <TextInput
       style={styles.input}
       placeholder="Escribe tu nombre"
       value={nombre}
       onChangeText={setNombre}
      />
      <TextInput
       style={styles.input}
       placeholder="Contraseña"
       secureTextEntry={true}
       keyboardType='numeric'
       value={contra}
       onChangeText={setContra}
      />
      <TextInput
       style={styles.input}
       placeholder="Escribe...."
       value={multexto}
       multiline={true}
       onChangeText={setMultexto}
      />
      <Button title="Mostar alerta" onPress={mostrarAlerta}/>
    </View>
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ffff',
    padding:20,
  },
  titulo:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:15,
  },
  input:{
    bordeWidth:1,
    borderColor:'#aaa',
    borderRadius:5,
    width:'80%',
    marginBottom:15,
  },
});

