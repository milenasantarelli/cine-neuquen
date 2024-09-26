import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BdScreen = () => {
  const native = useNavigation();
  return (
    <ScrollView>
    <View style={style.view1}>
        <Text style={style.titulo}>Hola Administrador Bienvenido a la base de datos</Text>
    </View>
    <View style={style.view2}>
        <View style={style.boton}>
            <Button title='HACER CONSULTA'/>
        </View>    
        <View style={style.boton}>
            <Button title='CERRAR PERFIL'/>
        </View>    
    </View>
    </ScrollView>
  );
}
export default BdScreen ;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10152f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});