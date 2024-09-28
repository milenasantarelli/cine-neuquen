import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import fechasData from "../data/movieDates.json"; // Importa el JSON

const MenuFechaHora = () => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [horariosDisponibles, setHorariosDisponibles] = useState([]);
  const [menuDesplegado, setMenuDesplegado] = useState(false);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState("");

  const seleccionarFecha = (fecha, tipoDeSala) => {
    setFechaSeleccionada(fecha);
    setHorariosDisponibles(tipoDeSala);
    setMenuDesplegado(false); // Contraer el menú después de seleccionar
  };

  const seleccionarHorario = (horario) => {
    setHorarioSeleccionado(horario);
  };

  return (
    <View>
      {/* Botón para desplegar o contraer el menú */}
      <TouchableOpacity onPress={() => setMenuDesplegado(!menuDesplegado)}>
        <Text>{fechaSeleccionada || "Selecciona una fecha"}</Text>
      </TouchableOpacity>

      {/* Menú desplegable para seleccionar la fecha */}
      {menuDesplegado && (
        <ScrollView>
          {fechasData.fechas.map((fecha, index) => {
            const fechaKey = Object.keys(fecha)[0];
            const tipoDeSala = fecha[fechaKey][0].tipoDeSala;
            return (
              <TouchableOpacity
                key={index}
                onPress={() => seleccionarFecha(fechaKey, tipoDeSala)}
              >
                <Text>{fechaKey}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}

      {/* Mostrar los horarios disponibles según la fecha seleccionada */}
      {fechaSeleccionada && (
        <View>
          <Text>Horarios disponibles:</Text>
          {Object.keys(horariosDisponibles).map((sala, index) => (
            <View key={index}>
              <Text>{sala}</Text>
              {horariosDisponibles[sala].map((horario, idx) => (
                <TouchableOpacity
                  key={idx}
                  onPress={() => seleccionarHorario(horario)}
                >
                  <Text>{horario}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      )}

      {/* Mostrar la fecha y hora seleccionada */}
      {horarioSeleccionado && (
        <Text>
          Fecha y hora seleccionada: {fechaSeleccionada} - {horarioSeleccionado}
        </Text>
      )}
    </View>
  );
};
export default MenuFechaHora;