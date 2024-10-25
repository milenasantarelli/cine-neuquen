import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';



const AccesoAdminScreen = () => {
  const native = useNavigation();
  return (
    <ScrollView>
    <View style={style.view1}>
        <Text style={style.titulo}>Hola Administrador</Text>
            <TextInput
                style={style.inputs}
                placeholder="Código de administrador"
            />
            <TextInput
                style={style.inputs}
                placeholder="Nombre"
            />
            <TextInput
                style={style.inputs}
                placeholder="Contraseña"
                secureTextEntry
            />
    </View>
    <View style={style.view2}>
        <View style={style.boton}>
            <Button title='ENTRAR'
            onPress={()=> native.navigate("Base de Datos")}
                color='#EEA816'
            />
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
});

