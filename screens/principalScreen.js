import {
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    View,
    Image,
   
    ScrollView
} from 'react-native';
import React from 'react';
import CuadradoImagenCarrusel from '../assets/components/cuadradoImagenCarrusel';
import { useNavigation } from '@react-navigation/native';



const PrincipalScreen = () => {

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
    <ScrollView style={styles.container}>
        <SafeAreaView >
             <View style={styles.cont}>
            <Image source={require('../assets/logoappc.png')} style={styles.img}/>
            </View>
            <View style={styles.body}>
           
           
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
            </View>
        </SafeAreaView>
    </ScrollView>
    );
};

export default PrincipalScreen;

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
        backgroundColor: '#10152f',
        width: 'auto',
        height: 900,
    },
    cont: {
        backgroundColor: '#384358',
        height: 200,
    },
    cartel: {
        color: '#fff',
        fontSize: 40,
        marginLeft: 85,
        marginTop: 120,
    },
    img:{
        height: 180,
        width: 180,
        marginLeft: 120,
    },
    concarru:{
      paddingTop:30,
    },
});