import {
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    View,
    Text,
} from 'react-native';
import React from 'react';
import CuadradoImagenCarrusel from '../src/components/cuadradoImagenCarrusel';
import { useNavigation } from '@react-navigation/native';

const PantallaPrincipal = () => {

    const navigation = useNavigation();

    const data = [
        { id: 1, nombre: "Shrek 2", image: 'https://wallpapers.com/images/hd/shrek-2-poster-crowding-circle-qrbjmvmtvwksj2dz.jpg' },
        { id: 2, nombre: "Barbie: esclava y princesa", image: 'https://image.tmdb.org/t/p/original/9WMJoDdfbVS9NDPjsQNuhmDO7zk.jpg' },
        { id: 3, nombre: "Un cuento chino", image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/828E0207C04B0844CD43771E5C402068DDDC0B8D8AA8BD4EF6C9CA30CADFBF46/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp' },
        { id: 4, nombre: "Indianna Jones", image: 'https://lh3.googleusercontent.com/proxy/EPjHwmLhaIJBNMx5DYkM296CgVXoAG37ybDQXGw3P2vP8uAnQ-wQE4I8Xnqt_5I-Vebo7-J7iUcbi68FEyaKUH2dP6sWxH-lEF_qOgChwcZ0SRXlhuQm-3xI_FsIkwg7-d29fAn5MH9lXEI40H7QshW4H2ztxCJFOf2G6uCIWniha3ZhMBafl1sCCXF2NSNXL6Xl-xRrZd0O4Q' },
    ];

    const onImagePress = (index) => {
        console.log(index);
        const itemSeleccionado = data[index];
        navigation.navigate("MovieDetails", { item: itemSeleccionado });
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.carouselContainer}>
                <CuadradoImagenCarrusel
                    data={data}
                    autoPlay={true}
                    pagination={true}
                    onImagePress={onImagePress}
                />
                <Text style={styles.text}>Destacadas del momento</Text>
            </View>
        </SafeAreaView>
    );
};

export default PantallaPrincipal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: 'white',
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
});