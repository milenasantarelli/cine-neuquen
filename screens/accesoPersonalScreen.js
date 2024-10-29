import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import appFirebase from '../credenciales';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import LoadingScreen from '../assets/components/loadingScreen';  
import * as SplashScreen from 'expo-splash-screen'; 



const auth = getAuth(appFirebase)


const AccesoAdminScreen = () => {
  const native = useNavigation();

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
      native.navigate('Base')

    } catch (error) {
      console.log(error);
    } finally{
      setIsLoading(false);
    }
  }
  return (
    <ScrollView>
    <View style={style.view1}>
        <Text style={style.titulo}>Hola Administrador</Text>
            <TextInput
                style={style.inputs}
                placeholder="Correo Electrónico"
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={style.inputs}
                placeholder="Contraseña"
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
            />
           
    </View>
    <View style={style.view2}>
        <View style={style.boton}>
        <TouchableOpacity onPress={logueo} style={style.touchcolor}>
            <Text style={style.touchtext}>Entrar</Text>
          </TouchableOpacity>
        </View>    
    </View>
    </ScrollView>
  );
}
export default AccesoAdminScreen;

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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
},
view2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 350,
    backgroundColor: '#000000',
},
titulo: {
    fontSize: 40,
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 50,
},
inputs: {
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
boton: {
    width: 250,
    marginTop: -60,
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

