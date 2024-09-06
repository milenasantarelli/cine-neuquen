import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";



export default function MovieDetails({ route, navigation }) {
    const { item } = route.params || {};

    console.log(item);

    if (!item) {
        return <Text style={styles.title}>Los datos no se pasaron... yo había ponido la peli aquí</Text>;
    }
    else {
        return (
            <ScrollView vertical>
                <Text style={styles.title}>Página en contrucción!</Text>
                <Text>Pantalla de: "{item.nombre}"</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: "150%",
    }
})