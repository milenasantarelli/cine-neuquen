import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import appFirebase from '../credenciales'; 

const auth = getAuth(appFirebase);

export default function RegisterScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registro = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Registro exitoso', 'Usuario creado correctamente');
      props.navigation.navigate('Principal');  
    } catch (error) {
      console.log(error);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <ScrollView>
      <View style={styles.view1}>
        <Text style={styles.titulo}>REGISTRATE</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Nombre de Usuario"
          onChangeText={(e) => setNombre(e)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.view2}>
        <View style={styles.boton}>
          <TouchableOpacity onPress={registro} style={styles.touchcolor}>
            <Text style={styles.touchtext}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10152f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    width: 'auto',
    height: 550,
    backgroundColor: '#8d0c1b',
  },
  input: {
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 50,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    width: 300,
    marginLeft: 50,
    fontFamily: 'Arial',
  },
  view2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 262,
    backgroundColor: '#000000',
  },
  boton: {
    width: 250,
    marginTop: -60,
  },
  touchcolor:{
    backgroundColor:'#EEA816',
    width: 250,
    height: 30,
    
  },
  touchtext:{
    fontSize:16,
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
  },
  titulo: {
    fontSize: 40,
    color: '#fff',
    marginLeft: 90,
    marginTop: 30,
    marginBottom: 50,
  },
  viewin: {
    marginTop: 100,
  },
});
