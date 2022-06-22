import  {initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, doc, setDoc, updateDoc,deleteDoc} from "firebase/firestore/lite";



const firebaseConfig = {
    apiKey: "AIzaSyCmmkNA1zBdiZwj518z37_Zd773ARcMxa4",
    authDomain: "project-code13.firebaseapp.com",
    projectId: "project-code13",
    storageBucket: "project-code13.appspot.com",
    messagingSenderId: "910730057302",
    appId: "1:910730057302:web:8f461988576bb9efe30df7",
    measurementId: "G-KDDN14WNJW"
  };

const app = initializeApp(firebaseConfig);
// Iniciar firestore
// database : base de datos
const db = getFirestore(app);


//todo PARA ATRACTIVOS
// Hacer la peticion para poder traer los productos
export const getAtractivo = async () => {
  // paso 1: Traer la coleccion de datos
  const collectionRegion = collection(db, "region_atractivo");
  // paso 2: Traer los documentos
  const documentRegion = await getDocs(collectionRegion);
  // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const region = documentRegion.docs.map((doc) => doc.data());
  return region;

};


/* //TODO: AUTENTICACION
export const auth = getAuth();

export const storeUser = async (email, password) => {
  try{
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
    return {
      ok:true,
      data: user,
    }
  }catch(error){
    console.log(error);
    return {
      ok:false,
      data: error.message,
    }
  }
} */

/* export const loginUser = async (email, password) => {
  try{
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
    return {
      ok:true,
      data: user,
    }
  }catch(error){
    console.log(error);
    return {
      ok:false,
      data: error.message,
    }
  }
} */

/* //TODO PARA USUARIOS
export const getUser = async () => {
  // paso 1: Traer la coleccion de datos
  const collectionUser = collection(db, "user_created");
  // paso 2: Traer los documentos
  const documentUser = await getDocs(collectionUser);
  // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const user_c = documentUser.docs.map((doc) => doc.data());
  return user_c;
};

export const storeUserC = async (userc) => {
  const id= uuidv4().replaceAll("-","")
  userc.id=id;
  await setDoc(doc(db, "user_created",id ), userc);
};

export const updateUserProfile = async (profile) => {
  try{
    const user = await updateProfile(auth.currentUser, profile);
    return{
      ok:true,
      data:user,
    }

  }catch(error){
    return{
      ok: false,
      data:error.message
    }
  }
} */