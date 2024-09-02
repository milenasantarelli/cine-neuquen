import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native';
import Navigation from '../navigation/navigationTab';


const PerfilScreen= () => {
    
    return (
        
        
        <ScrollView>
            
            <View style={styles.body}>
                <View style={styles.cont}>
                <Text style={styles.logo}>CTN</Text>
                </View>
                <Text style={styles.cartel}>BIENVENIDO</Text>
            </View>
            
        </ScrollView>
        
    );
}

export default PerfilScreen;

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
        height: 150,
    },
    logo: {
        color: '#fff',
        fontSize: 84,
        marginLeft: 120,
        top: 7, 
    },
    cartel: {
        color: '#fff',
        fontSize: 40,
        marginLeft: 85,
        marginTop: 120,
    },
});
