import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import appFirebase from '../credenciales';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(appFirebase)


export default function LoginScreen(props) {
 

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const logueo = async()=>{
    try {
      await signInWithEmailAndPassword(auth, email, password)
      Alert.alert('Iniciando Sesion', 'Accediendo...')
      props.navigation.navigate('Principal')
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView>
    <View style={style.view1}>
        <Text style={style.titulo}>LOGIN</Text>
    <View style={style.inputs}>
      <TextInput style={style.input}
        placeholder="Correo Electrónico"
        onChangeText={(text)=> setEmail(text)}
      />
      <TextInput style={style.input}
        placeholder="Contraseña"
        onChangeText={(text)=> setPassword(text)}
        secureTextEntry={true}
      />
    </View>
    </View>
    <View style={style.view2}>
    <View style={style.boton}>
      <TouchableOpacity onPress={logueo}>
        <Text>Sing in</Text>
      </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
  );
}


const style = StyleSheet.create({
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
  inputs: {
    marginTop: 150,
  },
  titulo: {
      fontSize: 40,
      color: '#fff',
      marginLeft: 140,
      marginTop: 50,
  },
  view2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 262,
    backgroundColor: '#0b1442',
  },
  boton: {
    color: '#fff',
    backgroundColor: '#0d4f83',
    margin: 25,
    fontSize: 20,
    width: 250,
  },
});

