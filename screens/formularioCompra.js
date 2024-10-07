
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';



const FormularioCompraScreen = () => {

    return (

        <ScrollView>
            <View style={styles.cont}>
                <Image source={require('../assets/logoappc.png')} style={styles.img}/>
            </View>

            <View style={styles.body}>
                <Text style={styles.msj}>Compra exitosa!</Text>
                <Text style={styles.titulo}>Descripción de la compra</Text>
                <View style={styles.Cont2}>
                    <Text style={styles.texto}>Título :</Text>
                    <Text style={styles.texto}>Total Entradas :</Text>
                    <Text style={styles.texto}>Fecha :</Text>
                    <Text style={styles.texto}>Hora :</Text>
                </View>
                <View style={styles.boton}>
                    <Button title='IR A MIS ENTRADAS'/>
                </View>
            </View>
        </ScrollView>

    );
}

export default FormularioCompraScreen;

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
    body: {
        backgroundColor: '#10152f',
        width: 'auto',
        height: 900,
    },
    boton: {
        width: 250,
        marginBottom: 30,
        marginTop: 50,
        marginLeft: 80,
        fontSize: 15,
    },
    cont:{
        backgroundColor: '#384358',
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
    texto :{
        display: 'flex',
        marginTop: 30,
        marginLeft: 20,
        color: '#fff',
        position: 'static',
        fontSize: 30,
    },
    titulo: {
        display: 'flex',
        fontSize: 35,
        marginTop: 30,
        marginLeft: -2,
        color: '#fff',
    },
    msj: {
        display: 'flex',
        fontSize: 20,
        marginTop: 20,
        marginLeft: 200,
        color: '#fff',
    },
});
