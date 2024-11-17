import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FakeTabs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.faketabs}>
      <TouchableOpacity onPress={() => navigation.navigate('Peliculas')}>
        <Image
          source={require('../../assets/home.png')}
          style={styles.img}
        />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
        <Image
          source={require('../../assets/person.png')}
          style={styles.img}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FakeTabs;

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
    marginHorizontal: 20,
  },
  faketabs: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around', 
    alignItems: 'center',
    zIndex: 100, 
    borderTopWidth: 1, 
    borderTopColor: '#ddd',
  },
});
