import { db } from "../firebase"
import { collection, addDoc, getDocs } from "firebase/firestore";

interface User {
    name: string;
    lastName: string;
    email: string;
    password: string;
    game: string;
}

export async function CreateUsers({ name, lastName, email, password, game  }: User) {


    const collectionUser = collection(db, "users"); 
    const data = { name, lastName, email, password, game  };   
    await addDoc(collectionUser, data); 
}

export async function getUsers(){
    const collectionUser = collection(db, "users");
    const querySnapshot = await getDocs(collectionUser);

    const users = querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    })
    
    return users;
}