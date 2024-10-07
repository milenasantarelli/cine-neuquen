import React, { useState } from "react";
import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import fechasData from "../data/movieDates.json";

const MenuFechaHora = ({ seleccionarFechaYHora }) => {
  //Guardo fecha y horario seleccionado
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState("");

  const [horariosDisponibles, setHorariosDisponibles] = useState([]);
  const [menuDesplegado, setMenuDesplegado] = useState(false); //menu de días
  const [menuHorariosDesplegado, setMenuHorariosDesplegado] = useState(false); //menú de hrs

  //Función para seleccionar fecha
  const seleccionarFecha = (fecha, tipoDeSala) => {
    console.log("Valor inicial menú (fechas): ", menuDesplegado);
    setFechaSeleccionada(fecha); //Actualizo la fecha a guardar
    setHorariosDisponibles(tipoDeSala); //Almacena hrs disp para fecha seleccionada
    //alterno menús
    setMenuDesplegado(false);
    setMenuHorariosDesplegado(true);
  };

  //Función para seleccionar horario
  const seleccionarHorario = (horario) => {
    console.log("Valor inicial menú (hrs): ", menuDesplegado);
    setHorarioSeleccionado(horario); //Actualizo la hr a guardar
    setMenuHorariosDesplegado(false); //contraigo menús
    seleccionarFechaYHora(fechaSeleccionada, horario);
  };

  //Renderizado
  return (
    <View style={styles.container}>
      {/* Botón para desplegar o contraer menú */}
      <Pressable
        onPress={() => {
          //cerrar menús abiertos si se presiona
          if (menuDesplegado || menuHorariosDesplegado) {
            if (menuDesplegado) {
              setMenuDesplegado(false);
            }
            if (menuHorariosDesplegado) {
              setMenuHorariosDesplegado(false);
            }
          } else { //si ninguno esta abierto, abrir el principal
            setMenuDesplegado(true);
          }
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Seleccione una función</Text>
      </Pressable>

      {/* Menú desplegable para seleccionar la fecha */}
      {menuDesplegado && (
        <ScrollView style={styles.scrollView}>
          {fechasData.fechas.map((fecha, index) => {
            const fechaKey = Object.keys(fecha)[0];
            const tipoDeSala = fecha[fechaKey][0].tipoDeSala;

            return (
              <Pressable
                key={index}
                onPress={() => seleccionarFecha(fechaKey, tipoDeSala)}
                style={styles.dateItem}
              >
                <Text style={styles.dateText}>{fechaKey}</Text>
              </Pressable>
            );
          })}
        </ScrollView>
      )}

      {/* Mostrar los horarios disponibles según la fecha seleccionada */}
      {fechaSeleccionada && menuHorariosDesplegado && (
        <View style={styles.horariosContainer}>
          <Text style={styles.horariosTitle}>Horarios disponibles:</Text>

          {Object.keys(horariosDisponibles).map((sala, index) => (
            <View key={index} style={styles.salaContainer}>
              <Text style={styles.salaText}>{sala}</Text>
              {horariosDisponibles[sala].map((horario, idx) => (
                <Pressable
                  key={idx}
                  onPress={() => seleccionarHorario(horario)}
                  style={styles.horarioItem}
                >
                  <Text style={styles.horarioText}>{horario}</Text>
                </Pressable>
              ))}
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e5a00f",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#e5a00f",
    padding: 10,
    borderRadius: 5,
    borderColor: "#000",
    borderWidth: 1,
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  scrollView: {
    marginTop: 10,
    maxHeight: 150,
  },
  dateItem: {
    padding: 10,
    backgroundColor: "#e5a00f",
    marginBottom: 5,
    borderRadius: 5,
  },
  dateText: {
    fontSize: 16,
  },
  horariosContainer: {
    margin: 10,
  },
  horariosTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  salaContainer: {
    marginTop: 5,
  },
  salaText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  horarioItem: {
    padding: 8,
    backgroundColor: "#e5a00f",
    marginBottom: 5,
    borderRadius: 5,
  },
  horarioText: {
    fontSize: 16,
  },
});

export default MenuFechaHora;
