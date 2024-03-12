
import { db } from "../firebase"
import { collection, addDoc, getDoc, getDocs } from "firebase/firestore";

interface Club {

    titulo: string;
    
    descripcion: string;
}

export async function CreateClub({ titulo, descripcion }: Club) {


    const collectionClub = collection(db, "clubs"); // Fix: Create a reference to the "games" collection
    const data = { titulo, descripcion };   // Fix: Create a JSON object with the data to be added
    await addDoc(collectionClub, data); // Fix: Add a new document with a generated id.
}


export async function getClub() {
    const collectionClub = collection(db, "clubs");
    const querySnapshot = await getDocs(collectionClub);
    const clubs = querySnapshot.docs.map(doc => doc.data());
    ;
    console.log(clubs);
    return clubs;
}

