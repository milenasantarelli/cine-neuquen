import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ScrollView, Image } from 'react-native';
import FakeTabs from '../assets/components/fakeTabs';



const ComprarEntradaScreen = () => {

    return (
    <View style={styles.container}>
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
                    <Button title='PAGAR' color='#EEA816'/>
                </View>
            </View>
        </ScrollView>
        <FakeTabs/>
    </View>
    );
};

export default ComprarEntradaScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img:{
        height: 180,
        width: 180,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cont: {
        backgroundColor: '#8d0c1b',
        height: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Cont2 :{
        backgroundColor: '#8d0c1b',
        display: 'flex',
        justifyContent: 'center',
        width: 340,
        height: 360,
        marginTop: 55,
        borderRadius: 20,
    },
    body: {
        backgroundColor: '#000000',
        width: 'auto',
        height: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto :{
        display: 'flex',
        margin: 15,
        left: 10,
        marginBottom: 10,
        color: '#fff',
        fontSize: 30,
        bottom: 20,
    },
    comp :{
        display: 'flex',
        fontSize: 60,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontFamily: 'Arial',
    },
    boton: {
        color: '#0d4f83',
        bottom: 20,
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        fontSize: 30,
        marginTop: 20,
    },
});