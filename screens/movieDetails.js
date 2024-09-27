import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuFechaHora from "../assets/components/menuFechas";

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
    //función del boton que lleva al formulario de compra
    const BuyTickets = (item) => {
      //Provisorio. Para verificar que se haya tomado el elemento a pasar
      console.log(item);
      navigation.navigate("", { item });
    };

    return (
      <SafeAreaView>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#000"
          translucent={true}
          style={{ display: "block" }}
        ></StatusBar>

        <ScrollView
          vertical
          contentContainerStyle={styles.contentContainer}
          style={styles.container}
        >
          {/* header */}
          <View style={styles.header}>
            <Image
              source={require("../assets/logoappc.png")}
              style={styles.img}
            />
          </View>

          <MenuFechaHora/>

          {/* detalles de la película */}
          <View style={styles.movieContainer}>
            {/* título */}
            <View>
              <Text style={styles.movieTitle}>{item.nombre}</Text>
            </View>

            {/* portada */}
            <Image
              style={styles.portadaMovie}
              source={{ uri: item.image }}
              resizeMode="contain"
            />

            {/* sipnosis */}
            <View style={styles.textContainer}>
              <View style={styles.tecnicalData}>
                <Text style={styles.movieText}>Clasificación:</Text>
                <Text style={styles.movieText}>Duración</Text>
                <Text style={styles.movieText}>Categoría:</Text>
              </View>
              <View style={styles.sipnosisContainer}>
                <Text style={styles.movieText}>Sipnosis:{item.sipnosis}</Text>
              </View>
            </View>
          </View>

          {/* botón de compra */}
          <View style={styles.button}>
            <Pressable onPress={BuyTickets}>
              <Text style={styles.buttonText}>Comprar entradas</Text>
            </Pressable>
          </View>
          
          {/* <MenuFechaHora/> */}
          
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
  },
  container: {
    backgroundColor: "#000",
    // display: 'flex',
    height: "100%",

    // borderWidth: 3,
    // borderColor: "#00bf63",
    // borderStyle: "dotted",
  },

  movieContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: 500,

    // borderWidth: 1,
    // borderColor: "#fff",
    // borderStyle: "dotted",
  },
  movieTitle: {
    color: "#fff",
    fontSize: 35,
    textTransform: "uppercase",
    letterSpacing: 1,
    fontWeight: "bold",
    marginTop: "10%",
  },
  portadaMovie: {
    width: "80%",
    height: "40%",
    borderRadius: 13,
    margin: "5%",
    // shadowRadius: 3,
    // shadowColor: '#fff',
  },
  textContainer: {
    maxWidth: '80%',
  },
  tecnicalData: {
    maxWidth: '65%',
  },
  movieText: {
    color: "#fff",
    fontStyle: "italic",
  },
  sipnosisContainer: {
    //
  },

  header: {
    backgroundColor: "#690101",
    height: 100,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 80,
    width: 80,
    padding: 5,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#e5a00f",
    width: 190,
    height: 45,
    margin: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
});
