import React, { useState } from 'react';  
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Image } from 'react-native';  
import { useNavigation } from '@react-navigation/native';  
import { firestore, serverTimestamp } from '../credenciales';  
import { collection, addDoc } from 'firebase/firestore';  

//subir el formulario de las peliculas
const BdScreen = () => {  
    const navigation = useNavigation();  
    const [horizontalImgUrl, setHorizontalImgUrl] = useState('');  
    const [verticalImgUrl, setVerticalImgUrl] = useState('');  
    const [title, setTitle] = useState('');  
    const [description, setDescription] = useState('');  
    const [ageRating, setAgeRating] = useState('');  
    const [category, setCategory] = useState('');  
    const [duration, setDuration] = useState('');  
    const [price, setPrice] = useState('');  
    const [ticketQuantity, setTicketQuantity] = useState('');  
    const [showDates, setShowDates] = useState([  
        { date: '', showtimes: ['', '', ''] },  
        { date: '', showtimes: ['', '', ''] },  
        { date: '', showtimes: ['', '', ''] }  
    ]);  
        //fechas de las peliculas
    const handleDateChange = (index, value) => {  
        const newDates = [...showDates];  
        newDates[index].date = value;  
        setShowDates(newDates);  
    };  
        //horarios de las peliculas
    const handleShowtimeChange = (dateIndex, timeIndex, value) => {  
        const newDates = [...showDates];  
        newDates[dateIndex].showtimes[timeIndex] = value;  
        setShowDates(newDates);  
    };  

    const handleSubmit = async () => {  
        try {  
            // Procesar las fechas y horarios para ser enviados a Firestore  
            const processedShowDates = showDates.map(item => ({  
                date: item.date,  
                showtimes: item.showtimes.filter(time => time !== '') // Eliminar horarios vacíos  
            }));  

            const ticketQty = parseInt(ticketQuantity, 10) || 0;   

            await addDoc(collection(firestore, 'Peliculas'), {  
                title,  
                description,  
                ageRating,  
                category,  
                duration: parseInt(duration, 10) || 0,  
                price: parseFloat(price) || 0,  
                tickets: ticketQty,  
                showDates: processedShowDates,  
                horizontalImgUrl,  
                verticalImgUrl,  
                createdAt: serverTimestamp()  
            });  
            console.log("Película guardada en Firestore");  
            alert("Película guardada correctamente");  
            // Opcional: Volver al menú de inicio después de guardar  
            navigation.goBack();  

        } catch (error) {  
            console.error("Error al guardar en Firestore: ", error);  
            alert("Hubo un error al guardar la película");  
        }  
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
                        {/* Campos de entrada existentes */}  
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
                        <TextInput  
                            style={style.input}  
                            placeholder="Precio (en ejemplo: 100)"  
                            value={price}  
                            onChangeText={setPrice}  
                            keyboardType="numeric"  
                        />  
                        <TextInput  
                            style={style.input}  
                            placeholder="Cantidad de entradas"  
                            value={ticketQuantity}  
                            onChangeText={setTicketQuantity}  
                            keyboardType="numeric"  
                        />  

                        {/* Fechas y Horarios */}  
                        {showDates.map((item, index) => (  
                            <View key={index}>  
                                <TextInput  
                                    style={style.input}  
                                    placeholder={`Fecha de función ${index + 1} (ej: 2024-11-10)`}  
                                    value={item.date}  
                                    onChangeText={(text) => handleDateChange(index, text)}  
                                />  
                                {item.showtimes.map((showtime, timeIndex) => (  
                                    <TextInput  
                                        key={timeIndex}  
                                        style={style.input}  
                                        placeholder={`Horario ${timeIndex + 1} (ej: 14:00)`}  
                                        value={showtime}  
                                        onChangeText={(text) => handleShowtimeChange(index, timeIndex, text)}  
                                    />  
                                ))}  
                            </View>  
                        ))}  

                        <TextInput  
                            style={style.input}  
                            placeholder="URL de imagen horizontal"  
                            value={horizontalImgUrl}  
                            onChangeText={setHorizontalImgUrl}  
                        />  
                        {horizontalImgUrl && <Image source={{ uri: horizontalImgUrl }} style={style.horizontalImg} />}  
                        <TextInput  
                            style={style.input}  
                            placeholder="URL de imagen vertical"  
                            value={verticalImgUrl}  
                            onChangeText={setVerticalImgUrl}  
                        />  
                        {verticalImgUrl && <Image source={{ uri: verticalImgUrl }} style={style.verticalImg} />}  

                        <View style={style.boton}>  
                            <Button title="Enviar" onPress={handleSubmit} color="#EEA816" />  
                        </View>  
                    </View>  
                </View>  
            </ScrollView>  
        </View>  
    );  
};  

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
    height: 1000,
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
    fontFamily: 'Arial',
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