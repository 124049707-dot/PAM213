import { Text, StyleSheet, View,Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import TextInputScreen from './TextInputScreen'
import FlatListScreen from './FlatListScreen'
import ImageBackgroundScreen from './ImageBackgroundScreen'
import ActivityIndicatorScreen from './ActivityIndicatorScreen'
import ScrollViewScreen from './ScrollViewScreen'
import ModalScreen from './ModalScreen'
import BottomSheetScreen from './BottomSheetScreen'
export default function MenuScreen() {
    const [screen,setScreen]=useState('menu'); //declaracion del estado que debe tener una variable y funcion

    switch(screen){
        case 'contador':
            return <ContadorScreen/>//se esta usando como si fuera un componente
        case 'botones':
            return <BotonesScreen/>  
        case 'textinput': 
            return<TextInputScreen/> 
        case 'imagebackground': 
            return<ImageBackgroundScreen/> 
        case 'scrollview': 
            return<ScrollViewScreen/>
        case 'activityindicator': 
            return<ActivityIndicatorScreen/> 
        case 'flatlist': 
            return<FlatListScreen/>
        case 'modal': 
            return<ModalScreen/>    
        case 'bottomsheet': 
            return<BottomSheetScreen/>   
        case 'menu':
            default:
                 return (
                 
                    <View style={styles.container}>
                    <Text style={styles.texto} > Menú de Prácticas</Text>
                    
                     <Button title='Pract: Contador' onPress={()=>setScreen('contador')}color='#311c7cff' />
                     <Button title='Pract: Buttons' onPress={()=>setScreen('botones')}color='#311c7cff' />
                     <Button title='Pract: TextInput' onPress={()=>setScreen('textinput')}color='#311c7cff' />
                     <Button title='Pract: ImageBackground' onPress={()=>setScreen('imagebackground')}color='#311c7cff' />
                     <Button title='Pract: ScrollView' onPress={()=>setScreen('scrollview')}color='#311c7cff' />
                     <Button title='Pract: ActivityIndicator' onPress={()=>setScreen('activityindicator')}color='#311c7cff' />
                     <Button title='Pract: FlatList' onPress={()=>setScreen('flatlist')}color='#311c7cff' />
                     <Button title='Pract: Modal' onPress={()=>setScreen('modal')}color='#311c7cff' />
                     <Button title='Pract: BottomSheet' onPress={()=>setScreen('bottomsheet')}color='#311c7cff' />


                   </View>
                    )    
    }  
}
const styles = StyleSheet.create({
  container: {
    flex: 1, //especificar como se reparte la distribucion de la pantalla
    backgroundColor: '#ffffff',
    alignItems: 'center', //end, center, start
    justifyContent: 'center',
    gap:5,
  },
  texto:{
     color: '#000000ff',
     fontSize: 35,
     fontFamily: 'Times New Roman',
     fontWeight:'bold',
     fontStyle: 'italic',
  },
});