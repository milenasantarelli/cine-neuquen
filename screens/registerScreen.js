import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';



const RegisterScreen = () => {
  const native = useNavigation();
  return (
    <ScrollView>

      <View style={styles.view1}>
        <Text style={styles.titulo}>CINE</Text>
        <Text style={styles.subtitulo}>NEUQUINO</Text>
        <Text style={styles.subtitulodos}>TU CINE</Text>
        <Text style={styles.contenido}>INICIA SESIÓN PARA ENCONTRAR TU PELÍCULA Y QUE NADIE TE SAQUE EL LUGAR</Text>
      </View>
      <View style={styles.view2}> 
        <View style={styles.input2}>
          <Button title='LOGEATE'
          onPress={() => native.navigate("Login")}
          />
        </View>
        <View style={styles.input2}>
          <Button title='REGISTRATE' 
          onPress={() => native.navigate("Registro")}
          />
        </View>
        <View style={styles.input2}>
          <Button title='ACCESO ADMINISTRADOR'

          />
        </View>
      </View>
    </ScrollView>
  );
}
export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10152f',
    alignItems: 'center',
    justifyContent: 'center',
  },

  view1: {

    width: 'auto',
    height: 490,
    backgroundColor: '#8d0c1b',
  },
  view2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 262,
    backgroundColor: '#0b1442',
  },
  titulo: {
    fontSize: 90,
    color: '#fff',
    bottom: 100,
    marginLeft: 100,
    marginTop: 100
  },
  subtitulo: {
    fontSize: 45,
    color: '#fff',
    bottom: 90,
    marginLeft: 80,
    fontFamily: 'arial',
  },
  subtitulodos: {
    fontSize: 25,
    color: '#fff',
    bottom: 90,
    marginLeft: 150,
    bottom: 90,
  },
  contenido: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 60,
    fontFamily: 'arial',
  },
  input2: {
    color: '#fff',
    backgroundColor: '#0d4f83',
    margin: 25,
    fontSize: 20,
    width: 250,
  },
});

