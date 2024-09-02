import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const RegistroScreen = () => {
    const native = useNavigation();
  return (
<ScrollView>

  <View style={styles.view1}>
  <Text style={styles.titulo}>REGISTRATE</Text>
  <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre de Usuario"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
      />
  <View style={styles.viewin}>
  </View>
  </View>
  <View style={styles.view2}>
    <View style={styles.boton}>
    <Button title='REGISTRARME'
        onPress={() => native.navigate("Login")}
        />
    </View>
  </View>
</ScrollView>
  );
}
export default RegistroScreen;

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

  view2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 262,
    backgroundColor: '#0b1442',
  },
  boton: {
    width: 300,
    marginTop: -60,
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
  viewin: {
    marginTop: 100,
  },
  titulo: {
    fontSize: 40,
    color: '#fff',
    marginLeft: 90,
    marginTop: 30,
    marginBottom: 50,
  },
});

