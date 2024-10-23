import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ScrollView, Image } from 'react-native';



const ComprarEntradaScreen = () => {

    return (
        <ScrollView>
            <View style={styles.cont}>
                <Image source={require('../assets/logoappc.png')} style={styles.img}/>
            </View>
            <View style={styles.body}>
            <Text style={styles.comp}>Compra</Text>
                <View style={styles.Cont2}>
                    <Text style={styles.texto}>Película :</Text>
                    <Text style={styles.texto}>Cantidad Entradas :</Text>
                    <Text style={styles.texto}>Hora :</Text>
                    <Text style={styles.texto}>Fecha :</Text>
                    <Text style={styles.texto}>Entrada :</Text>
                </View>
                <Text style={styles.title}>Billetera Virtual Mercado Pago</Text>
                <View style={styles.boton}>
                    <Button title='PAGAR'/>
                </View>
            </View>
        </ScrollView>

    );
};

export default ComprarEntradaScreen;

const styles = StyleSheet.create({
    container: {
        flex: '1px',
        padding: '20'
    },
    img:{
        height: 180,
        width: 180,
        marginLeft: 120,
    },
    cont: {
        backgroundColor: '#8d0c1b',
        height: 200,
    },
    Cont2 :{
        backgroundColor: '#0d4f83',
        display: 'flex',
        marginLeft: 30,
        width: 350,
        height: 400,
        marginTop: 60,
        borderRadius: 20,
    },
    body: {
        backgroundColor: '#0000000',
        width: 'auto',
        height: 1000,
    },
    texto :{
        display: 'flex',
        marginTop: 30,
        marginLeft: 20,
        color: '#fff',
        position: 'static',
        fontSize: 30,
    },
    comp :{
        display: 'flex',
        fontSize: 60,
        marginLeft: 80,
        position: 'static', 
        color: '#fff',
    },
    boton: {
        width: 250,
        marginBottom: 30,
        marginTop: 30,
        marginLeft: 80,
        fontSize: 20,
    },
    title: {
        display: 'flex',
        marginLeft: 80,
        marginTop: 25,
        color: '#fff',
        fontSize: 35,
        position: 'static',
    },
    text2: {
        display: 'flex',
        marginLeft: 25,
        marginTop: 18,
        fontSize: 35,
        color: '#fff',
        position: 'static',
    },
  container: {
    flex: "1px",
    padding: "20",
  },
  img: {
    height: 180,
    width: 180,
    marginLeft: 120,
  },
  cont: {
    backgroundColor: "#384358",
    height: 200,
  },
  Cont2: {
    backgroundColor: "#0d4f83",
    display: "flex",
    marginLeft: 30,
    width: 350,
    height: 400,
    marginTop: 60,
    borderRadius: 20,
  },
  body: {
    backgroundColor: "#10152f",
    width: "auto",
    height: 1200,
    display: 'flex',
    alignContent: 'center',
  },
  texto: {
    display: "flex",
    marginTop: 30,
    marginLeft: 20,
    color: "#fff",
    position: "static",
    fontSize: 30,
  },
  comp: {
    display: "flex",
    fontSize: 60,
    marginLeft: 80,
    position: "static",
    color: "#fff",
  },
  boton: {
    width: 250,
    marginBottom: 30,
    marginTop: 30,
    marginLeft: 80,
    fontSize: 20,
  },
  title: {
    display: "flex",
    marginLeft: 80,
    marginTop: 25,
    color: "#fff",
    fontSize: 35,
    position: "static",
  },
  text2: {
    display: "flex",
    marginLeft: 25,
    marginTop: 18,
    fontSize: 35,
    color: "#fff",
    position: "static",
  },
})