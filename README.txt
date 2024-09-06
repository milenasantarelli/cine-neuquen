NO BORRAR
A la fecha: 6 de septiembre:

Abril:
* Dependencias instaladas:
    npx expo install react-native-reanimated
    npx expo start -c
    npx expo prebuild
* El archivo llamado "main.js", el cual no se encuentra en ninguna carpeta, contiene todo lo
que la pantalla principal debe contener (pantalla luego de haberse registrado).
* Este es lo que hay en mi archivo "navigationStack", para que el encargado de tocar ese archivo 
añada lo faltante: (CAMBIAR RUTA DE "PantallaPrincipal")

    import MovieDetails from "./screens/movieDetails";
    import PantallaPrincipal from "./screens/main";

    const Stack = createStackNavigator();

    const Navigation = () => {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Pantalla Principal">
                    <Stack.Screen name="Pantalla Principal" component={PantallaPrincipal} />
                    <Stack.Screen name="MovieDetails" component={MovieDetails} />
                </Stack.Navigator>
            </NavigationContainer>

        );
    }

* El archivo "babel" tiene una añadidura para el funcionamiento de "react native 
reanimated". Cualquier cosa que se necesite sumar avísenme y lo edito.



