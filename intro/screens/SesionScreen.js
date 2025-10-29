import React,{useEffect,useState} from 'react';
import {View,Text,StyleSheet, ImageBackground,Image,TextInput,Switch,Button,TouchableOpacity} from 'react-native';
import {StatusBar,Platform,Alert} from 'react-native';
const MAIN_IMAGE =require('../assets/recursos/helado.gif');
export default function SesionScreen(){
  const[nombre,setNombre]=useState('');
  const[correo,setCorreo]=useState('');
  const[mensaje,setMensaje]=useState('');
  const[terminos,setTerminos]=useState('false');

  const mostrarAlerta=(titulo,mensaje)=>{
    if(Platform.OS=== 'web'){
      alert(titulo + ' '+mensaje);
    }else{
      Alert.alert(titulo,mensaje);
    }
  };
  const enviarDatos = () => {
  if (nombre.trim() === '' || correo.trim() === '') {
    Alert.alert('Campos incompletos', 'Por favor completa todos los campos antes de continuar.');
    setMensaje('Faltan campos por llenar');
    return;
  }

  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexCorreo.test(correo)) {
    Alert.alert('Correo no válido', 'Ingresa un correo electrónico válido ( ejemplo@gmail.com)');
    setMensaje('Correo no válido');
    return;
  }

  if (!terminos) {
    Alert.alert('Términos no aceptados', 'Debes aceptar los términos y condiciones para continuar.');
    setMensaje('Términos no aceptados');
    return;
  }

  //Alert.alert('Registro exitoso', ´Nombre: ${nombre}´, `Email:  ${correo}´);
  Alert.alert('Registro exitoso',`Usuario: ${nombre} \n Correo: ${correo}` );
  setMensaje('Datos enviados correctamente');
};
return (
    <ImageBackground
      source={MAIN_IMAGE}
      resizeMode="cover"
      imageStyle={styles.mainImageStyle}
      style={styles.mainBackground}
    >
      <StatusBar barStyle="light-content" backgroundColor="#00000071" translucent />
      <View style={styles.mainOverlay}>
        <Text style={styles.welcome}>Registro de usuario</Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe tu nombre"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Ingresa tu correo"
          value={correo}
          onChangeText={setCorreo}
        />

        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Aceptar términos y condiciones</Text>
          <Switch value={terminos} onValueChange={setTerminos} />
        </View>

        <TouchableOpacity style={styles.button} onPress={enviarDatos}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <Text style={styles.mensaje}>{mensaje}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.45)',
    padding: 24,
    borderRadius: 12,
  },
  logo: {
    width: 100,
    height: 100,
  },
  mainBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImageStyle: {
    opacity: 0.9,
  },
  mainOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.12)',
    padding: 20,
    borderRadius: 12,
    width: '80%',
  },
  welcome: {
    color: '#000000ff',
    fontSize: 22,
    marginBottom: 20,
    fontWeight: '600',
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#000000ff',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: 'space-between',
    width: '100%',
  },
  switchText: {
    color: '#000000ff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#ffffffff',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: '700',
  },
  mensaje: {
    marginTop: 20,
    fontSize: 18,
    color: '#000000ff',
    textAlign: 'center',
  },
});

