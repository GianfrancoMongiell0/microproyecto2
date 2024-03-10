import { db } from "../firebase"
import { collection, addDoc, getDoc, getDocs } from "firebase/firestore";

interface Game {
    ID: string;
    titulo: string;
    genero: string;
    descripcion: string;
}

export async function CreateGames({ ID, titulo, genero, descripcion }: Game) {


    const collectionGame = collection(db, "games"); // Fix: Create a reference to the "games" collection
    const data = { ID, titulo, genero, descripcion };   // Fix: Create a JSON object with the data to be added
    await addDoc(collectionGame, data); // Fix: Add a new document with a generated id.
}


export async function getGames(){
    const collectionGame = collection(db, "games");
    const querySnapshot = await getDocs(collectionGame);

    const games= querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    })
    
    return games;
}