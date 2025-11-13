import { View, Text, StyleSheet, SectionList } from 'react-native'
import React from 'react'
//rnfe
const house=[
 {
    title:'Casa',
    data:[
        'Cancun',
        'Puerto escondido',
        'Tulum',
    ],
 },
 {
    title:'Videojuegos',
    data:[
        'Valorant',
        'Call of Duty',
        'Grand Theft Auto',
    ],
 },  
 {
    title:'Telefono',
    data:[
        'iPhone',
        'Samsung',
        'OnePlus',
    ],
 },
 {
    title:'Libros',
    data:[
        'Harry Potter',
        'El Hobbit',
        'Lord of the Rings',
    ],
 },
 {
    title:'Animales',
    data:[
        'Perro',
        'Gato',
        'Elefante',
    ],
},
{
    title:'Arte',
    data:[
        'Pintura',
        'Escultura',
        'Grabado',
    ],  
},
{
    title:'Ciencia',
    data:[
        'Biologia',
        'Física',
        'Química',
    ],
},
];

const SectionListScreen = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={house}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text> 
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  }
});

export default SectionListScreen