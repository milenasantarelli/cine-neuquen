import {
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    View,
    Image,
    ScrollView,
    Button,
    Text,
    Pressable,
} from 'react-native';
import React from 'react';
import CuadradoImagenCarrusel from '../assets/components/cuadradoImagenCarrusel';
import { useNavigation } from '@react-navigation/native';
import data from '../assets/data/movies.json';
import FakeTabs from '../assets/components/fakeTabs';


const PrincipalScreen = () => {

    const navigation = useNavigation();

    const onImagePress = (item) => {
        console.log(item);
        navigation.navigate("DetallesPelicula", { item });
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <SafeAreaView>
                    <View style={styles.cont}>
                        <Image source={require('../assets/logoappc.png')} style={styles.img}/>
                    </View>

                    <View style={styles.body}>
                        <Text style={styles.des}>DESTACADOS</Text>
                        <View style={styles.concarru}>
                            <View style={styles.carouselContainer}>
                                <CuadradoImagenCarrusel
                                    data={data}
                                    autoPlay={true}
                                    pagination={true}
                                    onImagePress={onImagePress}
                                />
                            </View>
                        </View>
                        <View>
                            <Pressable
                                onPress={()=> navigation.navigate('Peliculas')}
                                style={styles.verMas}
                            >
                                <Text style={styles.vertext}>Ver más</Text></Pressable>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
            <FakeTabs />
        </View>
    )}
export default PrincipalScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000', 
    },
    scrollContent: {
        paddingBottom: 100, 
        position: 'absolute'
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
        height: '100%',
    },
    cont: {
        backgroundColor: '#8d0c1b',
        height: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    concarru: {
        paddingTop: 30,
    },
    verMas: {
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    vertext: {
        color: '#fff',
        fontSize: 20,
        display: 'flex',
        justifyContent: 'flex-end',
        textAlign: 'right',
        marginRight: 20,
        fontFamily: 'Arial',
    },
    des: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 20,
        fontFamily: 'Arial',
    }
});
