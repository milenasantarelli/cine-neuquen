import React, { useEffect, useState } from 'react';  
import { Text, View, FlatList, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';  
import { collection, getDocs } from 'firebase/firestore';  
import { firestore } from '../credenciales';  
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation  

const PeliculasScreen = () => {  
  const [peliculas, setPeliculas] = useState([]);  
  const navigation = useNavigation(); // Usa useNavigation  

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
    <ScrollView>  
      <View style={styles.view1}>  
        <Image source={require('../assets/logoappc.png')} style={styles.img} />  
      </View>  
      <View style={styles.view2}>  
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
  );  
};  

export default PeliculasScreen;  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    backgroundColor: '#10152f',  
    alignItems: 'center',  
    justifyContent: 'center',  
  },  
  view1: {  
    width: 'auto',  
    height: 300,  
    backgroundColor: '#8d0c1b',  
    justifyContent: 'center',  
    alignItems: 'center',  
  },  
  view2: {  
    justifyContent: 'center',  
    alignItems: 'center',  
    width: 'auto',  
    height: 350,  
    backgroundColor: '#000000',  
  },  
  img: {  
    height: 180,  
    width: 180,  
  },  
  text: {  
    color: '#fff',  
    marginBottom: 20,  
    marginTop: 20,  
  },  
  itemContainer: {  
    marginBottom: 20,  
  },  
  itemImage: {  
    height: 200,  
    width: 200,  
  },  
});