import React, { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const CantidadEntradas = ({ setCantidadEntradas }) => {
  const [quantity, setQuantity] = useState(1); // mínimo de 1
  const [mensajeError, setMensajeError] = useState("");

  // Limpiar mensaje de error desp de 4 seg
  useEffect(() => {
    if (mensajeError !== "") {
      const timer = setTimeout(() => {
        setMensajeError("");
      }, 4000);
      return () => clearTimeout(timer); // Limpiar temporizador al desmontar
    }
  }, [mensajeError]);

  // incrementar cantidad
  const incrementar = () => {
    if (quantity < 5) {
      const nuevaCantidad = quantity + 1;
      setQuantity(nuevaCantidad);
      setCantidadEntradas(nuevaCantidad);
      setMensajeError("");
    } else {
      setMensajeError("El máximo de entradas por operación es de 5");
    }
  };

  // decrementar cantidad
  const decrementar = () => {
    if (quantity > 1) {
      const nuevaCantidad = quantity - 1;
      setQuantity(nuevaCantidad);
      setCantidadEntradas(nuevaCantidad);
      setMensajeError("");
    } else {
      setMensajeError("El mínimo de entradas requerido es de 1");
    }
  };

  //renderizado
  return (
    <View style={styles.wrapperContainer}>
      <View style={styles.container}>
        <Pressable style={styles.button} onPress={decrementar}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>

        <Text style={styles.quantityText}>{quantity}</Text>

        <Pressable style={styles.button} onPress={incrementar}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
      <View style={styles.errorContainer}>
        {mensajeError !== "" && (
          <Text style={styles.errorText}>{mensajeError}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#e5a00f",
    borderWidth: 1,
    borderRadius: 6,
  },
  wrapperContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#e5a00f",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  quantityText: {
    color: "#fff",
    fontSize: 18,
    marginHorizontal: 20,
  },
  errorContainer: {
    height: 30,
    justifyContent: "center",
    marginTop: 2,
  },
  errorText: {
    fontSize: 15,
    fontWeight: "bold",
    fontStyle: "italic",
    textDecorationLine: "underline",
    color: "#000",
    backgroundColor: "#bc0000",
    padding: 1,
    // marginTop: 10,
  },
});

export default CantidadEntradas;
