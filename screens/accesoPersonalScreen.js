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
    fontSize: 40,
    color: '#fff',
    marginLeft: 90,
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
    marginLeft: 50,
    fontFamily: 'Arial',
},
boton: {
    width: 250,
    marginTop: -60,
},
});

