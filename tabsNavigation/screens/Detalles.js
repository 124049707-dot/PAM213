import {View,Text,StyleSheet} from 'react-native';

export default function Detalles(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Detalles de Usuario </Text>
            <Text style={styles.subtitle}> Usando Navegacion Stack </Text>

        </View>
    );
}
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  subtitle: {
    fontSize:18,
    color:'blue',
  },
});