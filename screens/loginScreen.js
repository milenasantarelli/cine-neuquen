import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const LoginScreen = () => {
  const native = useNavigation();
  return (
    <ScrollView>
    <View style={style.view1}>
        <Text style={style.titulo}>LOGIN</Text>
    <View style={style.inputs}>
      <TextInput style={style.input}
        placeholder="Correo Electrónico"
      />
      <TextInput style={style.input}
        placeholder="Contraseña"
        secureTextEntry
      />
    </View>
    </View>
    <View style={style.view2}>
    <View style={style.boton}>
      <Button
      title='Principal'
      onPress={()=> native.navigate("Tabs")}
      />
    </View>
    </View>
    </ScrollView>
  );
}
export default LoginScreen;

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

