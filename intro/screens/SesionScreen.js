import React,{useState} from 'react';//librerias
import {View,Text,StyleSheet, ImageBackground,Image,TextInput,Switch,Button,TouchableOpacity} from 'react-native';
import {StatusBar,Platform,Alert} from 'react-native';//componentes

const MAIN_IMAGE =require('../assets/recursos/helado.gif');
export default function SesionScreen(){

  const[nombre,setNombre]=useState('');
  const[correo,setCorreo]=useState('');
  //Almacena un mensaje de estado para el usuario "Faltan campos por llenar"
  const[mensaje,setMensaje]=useState('');
  //Almacena el estado del Switch
  const[terminos,setTerminos]=useState(false);
  
  //Verifica si nombre o correo están vacíos
  const enviarDatos = () => {
  if (nombre.trim() === '' || correo.trim() === '') {
    Alert.alert('Campos incompletos', 'Por favor completa todos los campos antes de continuar.');
    setMensaje('Faltan campos por llenar');
    return;
  }
  //verificar si el formato del correo es válido
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexCorreo.test(correo)) {
    Alert.alert('Correo no válido', 'Ingresa un correo electrónico válido ( ejemplo@gmail.com)');
    setMensaje('Correo no válido');
    return;
  }
  //verificar los terminos
  if (!terminos) {
    Alert.alert('Términos no aceptados', 'Debes aceptar los términos y condiciones para continuar.');
    setMensaje('Términos no aceptados');
    return;
  }

  //Al dar enviar sale el mensaje
  Alert.alert('Registro exitoso',`Usuario: ${nombre} \n Correo: ${correo}` );
  setMensaje('Datos enviados correctamente');
};
//estructura de la interfaz
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

