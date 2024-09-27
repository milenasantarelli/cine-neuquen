import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';



const ComprarEntradaScreen = () => {
    const native = useNavigation();
    return (
    <ScrollView>

    <View>
        <Text style={styles.text}>Hola</Text>
    </View>
    </ScrollView>
);
}
export default ComprarEntradaScreen ;

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#10152f',
    alignItems: 'center',
    justifyContent: 'center',
},
text:{
    color: '#ffffff',
},

});