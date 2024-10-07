import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const RegistroScreen = () => {
  const native = useNavigation();

  const [correo, setCorreo] = useState("")
  const [nombre, setNombre] = useState("")
  const [password, setPass] = useState("")

  const registrarse = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(correo, password)
      .then((response) => {
        const uid = response.user.uid
        const data = {
          id: uid,
          email,
          fullName
        }
        /* const usersRef = firebase.firestore().collection('users')
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate('Home', { user: data })
          })
          .catch((error) => {
            alert(error)
          }) */
      })
      .catch((error) => {
        alert(error)
      })
  }
  return (
    <ScrollView>

      <View style={styles.view1}>
        <Text style={styles.titulo}>REGISTRATE</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          onChangeText={(e) => setCorreo(e)}
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
          onChangeText={(e) => setPass(e)}
        />
        <View style={styles.viewin}>
        </View>
      </View>
      <View style={styles.view2}>
        <View style={styles.boton}>
          <Button title='REGISTRARME'
            onPress={() => registrarse()}
                color='#EEA816'
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
    backgroundColor: '#000000',
  },
  boton: {
    width: 250,
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

