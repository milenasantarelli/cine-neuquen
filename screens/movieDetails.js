import React, { useState, useEffect } from "react";
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
import MenuFechaHora from "../assets/components/menuDesplegableFechas";
import CantidadEntradas from "../assets/components/cantidadEntradas";

export default function MovieDetails({ route }) {
  const navigation = useNavigation();
  const { item } = route.params || {};

  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState("");
  const [cantidadEntradas, setcantidadEntradas] = useState(1);

  //mensaje para boton deshabilitado
  const [mensajeVisible, setMensajeVisible] = useState(false);
  //Para deshabilitar boton de compra si no hay fecha/hr seleccionada
  const deshabilitarBoton = !fechaSeleccionada || !horarioSeleccionado;

  const manejarSeleccionFechaHora = (fecha, horario) => {
    setFechaSeleccionada(fecha);
    setHorarioSeleccionado(horario);
  };

  //función del boton que lleva al formulario de compra
  const BuyTickets = () => {
    if (!deshabilitarBoton) {
      navigation.navigate("Comprar entrada", {
        item: {
          nombre: item.nombre,
        },
        fecha: fechaSeleccionada,
        horario: horarioSeleccionado,
        cantidadEntradas,
      });
    } else {
      setMensajeVisible(true); //mje de error
    }
  };

  // Para ocultar el mensaje después de unos segundos
  useEffect(() => {
    if (mensajeVisible) {
      const timer = setTimeout(() => {
        setMensajeVisible(false); // Ocultar el mensaje después de 3 segundos
      }, 4000);
      return () => clearTimeout(timer); // Limpiar el timeout si el componente se desmonta
    }
  }, [mensajeVisible]);

  if (!item) {
    return (
      <Text style={styles.title}>
        Los datos no se pasaron... yo había ponido la peli aquí
      </Text>
    );
  } else {
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

          {/* detalles de la película */}
          <View style={styles.movieContainer}>
            {/* título */}
            <Text style={styles.movieTitle}>{item.nombre}</Text>

            {/* portada */}
            <Image
              style={styles.portadaMovie}
              source={{ uri: item.horizontalImage }}
              resizeMode="contain"
            />

            {/* sipnosis */}
            <View style={styles.textContainer}>
              <View style={styles.tecnicalData}>
                <Text style={styles.movieText}>Clasificación: {item.clasificacion}</Text>
                <Text style={styles.movieText}>Duración: {item.duracion}</Text>
                <Text style={styles.movieText}>Categoría: {item.categoria}</Text>
              </View>
              <View style={styles.sipnosisContainer}>
                <Text style={styles.movieText}>Sipnosis: {item.sipnosis}</Text>
              </View>
            </View>
          </View>

          {/* componente para seleccionar cantidad de entradas */}
          <Text style={styles.movieText}>Seleccione cantidad de entradas:</Text>
          <CantidadEntradas setCantidadEntradas={setcantidadEntradas}/>

            {/* componente para seleccionar funcion */}
          <MenuFechaHora seleccionarFechaYHora={manejarSeleccionFechaHora} />
          {fechaSeleccionada && horarioSeleccionado && (
            <Text style={styles.selectedText}>
              Función seleccionada:{"\n"}
              Fecha: {fechaSeleccionada} {"\n"}
              Hora: {horarioSeleccionado} hrs.
            </Text>
          )}

          {/* mensaje de error */}
          {mensajeVisible && (
            <Text style={styles.mensajeError}>
              Seleccione fecha y horario para continuar la compra.
            </Text>
          )}

          {/* botón de compra */}
          <View style={styles.button}>
            <Pressable
              onPress={BuyTickets}
              style={[
                styles.button,
                deshabilitarBoton && styles.botonDeshabilitado,
              ]}
            >
              <Text
                style={[
                  styles.buttonText,
                  deshabilitarBoton && styles.botonTextDeshabilitado,
                ]}
              >
                Continuar compra
              </Text>
            </Pressable>
          </View>
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
  },

  movieContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: 500,
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
  },
  textContainer: {
    maxWidth: "80%",
  },
  tecnicalData: {
    maxWidth: "65%",
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
    width: 230,
    height: 55,
    margin: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textTransform: "uppercase",
  },
  botonDeshabilitado: {
    backgroundColor: "#b27805",
  },
  botonTextDeshabilitado: {
    color: "#000",
    fontWeight: "light",
    fontStyle: "italic",
  },
  mensajeError: {
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: "italic",
    textDecorationLine: "underline",
    color: "#000",
    backgroundColor: '#bc0000',
    padding: 1,
    marginTop: 10
  },
  selectedText: {
    margin: 10,

    fontSize: 16,
    fontWeight: "bold",
    color: "#e5a00f",
    textDecorationLine: "underline",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
  },
});
