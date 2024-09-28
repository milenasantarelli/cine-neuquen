
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ScrollView, Image } from 'react-native';



const MisEntradasScreen = () => {

    return (


        <ScrollView>

            <View>
                <Image source={require('../assets/logoappc.png')}/>
            </View>
            <View>
                <Image source={require('../assets/person.png')}/>
                <Text>BIENVENIDO A MIS ENTRADAS</Text>

               
               

            </View>


        </ScrollView>

    );
}

export default MisEntradasScreen;

const styles = StyleSheet.create({
    container: {
        flex: '1px',
        padding: '20'
    },
  
});
