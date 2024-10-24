import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import appFirebase from '../credenciales';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from '../assets/components/loadingScreen';  
import * as SplashScreen from 'expo-splash-screen'; 

const auth = getAuth(appFirebase)


export default function LoginScreen(props) {

  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  useEffect(() => {  
    const prepare = async () => {  

    await new Promise(resolve => setTimeout(resolve,2000));  
    setIsLoading(false);  
    await SplashScreen.hideAsync();

    };  
   
    prepare();  
    }, []);  
   
    if (isLoading) {  
    return <LoadingScreen />;  
    }  
  const logueo = async () => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password)
      Alert.alert('Iniciando Sesion', 'Accediendo...')
      props.navigation.navigate('Principal')

    } catch (error) {
      console.log(error);
    } finally{
      setIsLoading(false);
    }
  }
 
 
  return (
    <ScrollView>
      <View style={style.view1}>
        <Text style={style.titulo}>LOGIN</Text>
        <View style={style.inputs}>
          <TextInput style={style.input}
            placeholder="Correo Electrónico"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput style={style.input}
            placeholder="Contraseña"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={style.view2}>
        <View style={style.boton}>
          <TouchableOpacity onPress={logueo} style={style.touchcolor}>
            <Text style={style.touchtext}>Sing in</Text>
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
    height: '100%',
    backgroundColor: '#8d0c1b',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial',
  },
  inputs: {
    marginTop: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    height: '99%',
    backgroundColor: '#000000',
  },
  boton: {
    color: '#fff',
    backgroundColor: '#0d4f83',
    margin: 25,
    fontSize: 20,
    width: 250,
  },
  touchcolor: {
    backgroundColor: '#EEA816',
    width: 250,
    height: 30,

  },
  touchtext: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

