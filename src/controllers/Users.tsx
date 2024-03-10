import { db } from "../firebase"
import { collection, addDoc, getDoc, getDocs } from "firebase/firestore";

interface User {
    name: string;
    lastName: string;
    email: string;
    password: string;
    game: string;
}

export async function CreateUsers({ name, lastName, email, password, game  }: User) {


    const collectionUser = collection(db, "users"); // Fix: Create a reference to the "games" collection
    const data = { name, lastName, email, password, game  };   // Fix: Create a JSON object with the data to be added
    await addDoc(collectionUser, data); // Fix: Add a new document with a generated id.
}

export async function getUsers(){
    const collectionUser = collection(db, "users");
    const querySnapshot = await getDocs(collectionUser);

    const users = querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    })
    
    return users;
}