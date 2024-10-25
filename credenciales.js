// Importar Firebase y Firestore
import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBpKFlPp9ttt34fMC5RTR6TzDneW86QPFw",
  authDomain: "proyecto-expo-a48e4.firebaseapp.com",
  projectId: "proyecto-expo-a48e4",
  storageBucket: "proyecto-expo-a48e4.appspot.com",
  messagingSenderId: "720533317152",
  appId: "1:720533317152:web:268e72af18edff50d57e45",
  measurementId: "G-FWW89EH9WS"
};

// Inicializa Firebase y Firestore
const appFirebase = initializeApp(firebaseConfig);
const firestore = getFirestore(appFirebase);

// Exporta Firestore y la función de marca de tiempo del servidor
export { firestore, serverTimestamp };
