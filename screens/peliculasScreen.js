import {
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    View,
    Image,
    ScrollView,
    Button,
    Text
} from 'react-native';
import React from 'react';
import CuadradoImagenCarrusel from '../assets/components/cuadradoImagenCarrusel';
import { useNavigation } from '@react-navigation/native';
import data from '../assets/data/movies.json';



const PeliculasScreen = () => {

    const navigation = useNavigation();

    const onImagePress = (item) => {
        console.log(item);
        navigation.navigate("DetallesPelicula", { item });
    }

    return (
        <ScrollView style={styles.container}>
            <SafeAreaView >
                <View style={styles.cont}>
                    <Image source={require('../assets/logoappc.png')} style={styles.img} />
                </View>
                <View style={styles.body}>
                    <Image
                    source={require('../assets/Furiosa.jpg')}
                    />

                    <Image
                    
                    />

                    <Image
                    
                    />

                    <Image

                    />

                    <Image

                    />

                </View>




            </SafeAreaView>
        </ScrollView>
    );
};

export default PeliculasScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    text: {
        textAlign: 'center',
        color: 'black',
        marginBottom: 10,
        fontWeight: "bold",
    },
    carouselContainer: {
        marginBottom: 20,
    },
    body: {
        backgroundColor: '#000000',
        width: 'auto',
        height: 900,
    },
    cont: {
        backgroundColor: '#8d0c1b',
        height: 200,
    },
    cartel: {
        color: '#fff',
        fontSize: 40,
        marginLeft: 85,
        marginTop: 120,
    },
    img: {
        height: 180,
        width: 180,
        marginLeft: 120,
    },
    concarru: {
        paddingTop: 30,
    },
});

