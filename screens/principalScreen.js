import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ScrollView, Image} from 'react-native';
import Navigation from '../navigation/navigationTab';


const PrincipalScreen= () => {
    
    return (
        
        
        <ScrollView>
            
            <View style={styles.cont}>
            <Image source={require('../assets/logoappc.png')} style={styles.img}/>
            </View>
            <View style={styles.body}>
           
                <Text style={styles.cartel}>BIENVENIDO</Text>
            </View>
            
        </ScrollView>
        
    );
}

export default PrincipalScreen;

const styles = StyleSheet.create({
    container: {
        flex: '1px',
        padding:'20'
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
        color: '#fff',
        fontSize: 40,
        marginLeft: 85,
        marginTop: 120,
    },
    img:{
        height: 180,
        width: 180,
        marginLeft: 120,
    }
});
