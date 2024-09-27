import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MovieDetails({ route }) {
  const navigation = useNavigation();
  const { item } = route.params || {};

  console.log(item);

  if (!item) {
    return (
      <Text style={styles.title}>
        Los datos no se pasaron... yo había ponido la peli aquí
      </Text>
    );
  } else {
    return (
      <ScrollView vertical style={styles.container}>
        <SafeAreaView>
          <View style={styles.cont}>
            <Image
              source={require("../assets/logoappc.png")}
              style={styles.img}
            />
          </View>

          <View style={styles.movieContainer}>
            <Text style={styles.movieTitle}>{item.nombre}</Text>
            <Image
              style={styles.portadaMovie}
              source={{ uri: item.image }}
              resizeMode="contain"
            />
            <Text style={{color: "#fff"}}>Sipnosis:</Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  movieTitle: {
    color: "#fff",
    fontSize: 60,
    textTransform: "uppercase",
    
  },
  container: {
    backgroundColor: "#10152f",
    // width: "auto",
    // height: 900,
  },
  movieContainer: {
    display: "flex",
    alignItems: "center",
    margin: "10%",
  },

  cont: {
    backgroundColor: "#384358",
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    height: 80,
    width: 80,
    padding: 5,
    // marginLeft: 120,
  },
  portadaMovie: {
    width: "100%",
    height: 100,
    borderRadius: "4px",
  },
});
