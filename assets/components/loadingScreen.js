import { View, Text, StyleSheet } from 'react-native';  
import * as SplashScreen from 'expo-splash-screen';  

const LoadingScreen = () => {  
 return (  
 <View style={styles.container}>  
 <Text style={styles.text}>Cargando...</Text>  
 </View>  
 );  
};  

const styles = StyleSheet.create({  
 container: {  
 flex:1,  
 justifyContent: 'center',  
 alignItems: 'center',  
 },  
 text: {  
 fontSize:24,  
 },  
});  

export default LoadingScreen;