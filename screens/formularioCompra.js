
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import FakeTabs from '../assets/components/fakeTabs';


const FormularioCompraScreen = () => {

    return (
        <View style={styles.container}>
        <ScrollView>
            <View style={styles.cont}>
                <Image source={require('../assets/logoappc.png')} style={styles.img}/>
            </View>

            <View style={styles.body}>
                <Text style={styles.titulo}>Descripción de la compra</Text>
                <View style={styles.Cont2}>
                    <Text style={styles.texto}>Título :</Text>
                    <Text style={styles.texto}>Total Entradas :</Text>
                    <Text style={styles.texto}>Fecha :</Text>
                    <Text style={styles.texto}>Hora :</Text>
                </View>
                <View style={styles.boton}>
                    <Button title='IR A MIS ENTRADAS' color='#EEA816'/>
                </View>
            </View>
        </ScrollView>
        <FakeTabs/>
        </View>
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        backgroundColor: '#000000',
        width: 'auto',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boton: {
        width: 250,
        Bottom: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
    },
    cont:{
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
        height: '50%',
        marginBottom: '40%',
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
        left: 10,
        bottom: 20,
        fontSize: 35,
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
    },

});
