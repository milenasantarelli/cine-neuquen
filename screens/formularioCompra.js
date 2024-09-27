
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ScrollView, Image } from 'react-native';



const FormularioCompraScreen = () => {

    return (


        <ScrollView>

            <View style={styles.cont}>
                <Image source={require('../assets/logoappc.png')} style={styles.img} />
            </View>
            <View style={styles.body}>
                <Image source={require('../assets/person.png')} style={styles.iconPerfil} />
                <Text style={styles.text}>BIENVENIDO A MI FORMULARIO DE COMPRA</Text>

               
               

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
  
});
