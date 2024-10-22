import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FakeTabs from '../assets/components/fakeTabs';


const PerfilScreen = () => {

    const navigation = useNavigation();

    return (

    <View style={styles.container}>
        <ScrollView style={styles.scrollContent}>

            <View style={styles.cont}>
                <Image source={require('../assets/logoappc.png')} style={styles.img} />
            </View>
            <View style={styles.body}>
                <Image source={require('../assets/person.png')} style={styles.iconPerfil} />
                <Text style={styles.text}>Nombre y Apellido</Text>

                <Text style={styles.text}>MIS ENTRADAS</Text>
                <Button
                    title='Mis peliculas'
                    onPress={()=> navigation.navigate('Mis entradas')}
                    color='#EEA816' style= {styles.Button}
                />
            </View>

        </ScrollView>
        <FakeTabs/>
    </View>
    );
}

export default PerfilScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollContent: {
        paddingBottom: 100, 
    },
    body: {
        backgroundColor: '#000000',
        width: 'auto',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cont: {
        backgroundColor: '#8d0c1b',
        height: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartel: {
        color: '#ffffff',
        fontSize: 40,
        marginLeft: 85,
        marginTop: 120,
    },
    img: {
        height: 180,
        width: 180,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconPerfil: {
        width: 100,
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '80%'
    },
    text: {
        color: '#ffffff',
        fontSize: 30,
        bottom: '35%',
    },
    Button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
