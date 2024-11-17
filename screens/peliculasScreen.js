import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../credenciales';
import { useNavigation } from '@react-navigation/native';
import FakeTabs from '../assets/components/fakeTabs';
import data from '../assets/data/movies.json';
import CuadradoImagenCarrusel from '../assets/components/cuadradoImagenCarrusel';


const PeliculasScreen = () => {
  const [peliculas, setPeliculas] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const obtenerPeliculas = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'Peliculas'));
        const peliculasArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log("Películas obtenidas:", peliculasArray);
        setPeliculas(peliculasArray);
      } catch (error) {
        console.error('Error al obtener las películas:', error);
      }
    };

    obtenerPeliculas();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('DetallesPelicula', { pelicula: item })}>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>{item.title}</Text>
        <Image source={{ uri: item.verticalImgUrl }} style={styles.itemImage} />
        <Text style={styles.text}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.view1}>
          <Image source={require('../assets/logoappc.png')} style={styles.img} />
        </View>
        <View style={styles.concarru}>
          <Text style={styles.titulo}>Destacadas del momento</Text>
            <View style={styles.carouselContainer}>
              <CuadradoImagenCarrusel
                data={data}
                autoPlay={true}
                pagination={true}

              />
            </View>
          </View>
        <View style={styles.view2}>
        <Text style={styles.titulo}>Todas las pelís</Text>
         
          {peliculas.length > 0 ? (
            <FlatList
              data={peliculas}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          ) : (
            <Text>No hay datos disponibles</Text>
          )}
        </View>
       
      </ScrollView>
      <View style={styles.fixedTab}>
        <FakeTabs />
      </View>
    </View>
  );
};

export default PeliculasScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollContent: {
    paddingBottom: 80,
  },
  view1: {
    backgroundColor: '#8d0c1b',
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    backgroundColor: '#000000',
    padding: 15,
  },
  img: {
    height: 180,
    width: 180,
  },
  text: {
    color: '#fff',
    marginBottom: 20,
    marginTop: 20,
    fontFamily: 'Arial',
  },
  itemContainer: {
    marginBottom: 20,
  },
  itemImage: {
    height: 200,
    width: 200,
  },
  fixedTab: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#8d0c1b',
    zIndex: 1,
  },
  carouselContainer: {
    marginBottom: 20,
  }, concarru: {
    paddingTop: 30,
  },
  titulo:{
    color: '#fff',
    fontSize:30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Arial'
    }
});