import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

const BdScreen = () => {
  const navigation = useNavigation();

  const [horizontalImg, setHorizontalImg] = useState(null);
  const [verticalImg, setVerticalImg] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ageRating, setAgeRating] = useState('');
  const [category, setCategory] = useState('');
  const [duration, setDuration] = useState('');

  // Imagen horizontal
  const pickHorizontalImg = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9], 
      quality: 1,
    });

    if (!result.canceled) {
      setHorizontalImg(result.assets[0].uri);
    }
  };

  // Imagen vertical
  const pickVerticalImg = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [9, 16], 
      quality: 1,
    });

    if (!result.canceled) {
      setVerticalImg(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    console.log("Título:", title);
    console.log("Descripción:", description);
    console.log("Clasificación de edad:", ageRating);
    console.log("Categoría:", category);
    console.log("Duración:", duration);
    console.log("Imagen horizontal:", horizontalImg);
    console.log("Imagen vertical:", verticalImg);
  };

  return (
    <View style={style.container}>
      <ScrollView>
        <View style={style.view1}>
          <Image source={require('../assets/logoappc.png')} style={style.img} />
        </View>
        <View style={style.body}>
          <Text style={style.text}>Dar de alta una película</Text>
          <View style={style.cont}>
            <TextInput
              style={style.input}
              placeholder="Título de la película"
              value={title}
              onChangeText={setTitle}
            />
            <TextInput
              style={style.input}
              placeholder="Descripción de la película"
              value={description}
              onChangeText={setDescription}
              multiline
            />
            <TextInput
              style={style.input}
              placeholder="Clasificación de edad"
              value={ageRating}
              onChangeText={setAgeRating}
            />
            <TextInput
              style={style.input}
              placeholder="Categoría"
              value={category}
              onChangeText={setCategory}
            />
            <TextInput
              style={style.input}
              placeholder="Duración (en minutos)"
              value={duration}
              onChangeText={setDuration}
              keyboardType="numeric"
            />
              <View style={style.boton}>
                <Button title="Seleccionar imagen horizontal" onPress={pickHorizontalImg} color="#EEA816"/>
                {horizontalImg && <Image source={{ uri: horizontalImg }} style={style.horizontalImg} />}
              </View>
              <View style={style.boton}>
                <Button title="Seleccionar imagen vertical" onPress={pickVerticalImg} color="#EEA816"/>
                {verticalImg && <Image source={{ uri: verticalImg }} style={style.verticalImg} />}
              </View>
              <View style={style.boton}>
                <Button title="Enviar" onPress={handleSubmit} color="#EEA816"/>
              </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default BdScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: '20',
  },
  view1: {
    backgroundColor: '#8d0c1b',
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
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
  cont: {
    marginBottom: 80,
    backgroundColor: '#8d0c1b',
    display: 'flex',
    justifyContent: 'center',
    width: 340,
    height: 'auto',
    borderRadius: 20,
    padding: 20,
  },
  text: {
    color: '#ffffff',
    fontSize: 30,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 60,
  },
  input: {
    height: 40,
    borderWidth: 1,
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  horizontalImg: {
    width: 400,
    height: 150,
    alignItems: 'center',
  },
  verticalImg: {
    width: 400,
    height: 200,
    alignItems: 'center',
  },
  boton: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#fff',
    color: '#0d4f83',
    margin: 10,
    width: 300,
  },
});
