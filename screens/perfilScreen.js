import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ScrollView, Image, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FakeTabs from '../assets/components/fakeTabs';
import { getAuth } from 'firebase/auth';


const PerfilScreen = () => {

    const navigation = useNavigation();

    const [userInfo, setUserInfo] = useState({ email: '', displayName: 'Nombre no disponible' });  
 const auth = getAuth();  

 useEffect(() => {  
 const user = auth.currentUser; if (user) {  
 setUserInfo({  
 email: user.email,  
 displayName: user.displayName || 'Nombre no disponible',  
 });  
 }  
 }, [auth]);  
    return (

    <View style={styles.container}>
        <ScrollView style={styles.scrollContent}>

            <View style={styles.cont}>
                <Image source={require('../assets/logoappc.png')} style={styles.img} />
            </View>
            <View style={styles.body}>
                <Image source={require('../assets/person.png')} style={styles.iconPerfil} />
                <Text style={styles.text}></Text>
                <Text style={styles.text}>email de usuario: {userInfo.email}</Text>

                <Text style={styles.text}>MIS ENTRADAS</Text>
                <Button
                    title='Mis peliculas'
                    onPress={()=> navigation.navigate('Mis entradas')}
                />

            </View>


        </ScrollView>
        <FakeTabs/>
        </View>
    );
};

export default PerfilScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollContent: {
        paddingBottom: 100, 
    },
    body: {
        backgroundColor: '#10152f',
        width: 'auto',
        height: 722,
    },
    cont: {
        backgroundColor: '#384358',
        height: 200,
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
        marginLeft: 120,
    },
    iconPerfil: {
        width: 100,
        height: 100,
        marginLeft: 150,
    },
    text: {
        color: '#ffffff',
        fontSize: 30,
    },
});
