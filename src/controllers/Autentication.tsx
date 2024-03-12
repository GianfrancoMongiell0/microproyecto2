import { db } from "../firebase"
import { collection, query, where, getDocs } from "firebase/firestore";

interface LU{
    email: string;
    password: string;
}

export async function loginUser({email,password}: LU) {
    // Realizar una consulta para obtener el documento que coincida con el correo electrónico
    const usersCollection = collection(db, 'users');
    const q = query(usersCollection, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    // Verificar si se encontró un documento con el correo electrónico dado
    if (querySnapshot.size === 0) {
        return { success: false, message: 'El correo electrónico no está registrado.' };
    }

    // Recorrer los documentos para encontrar uno que coincida con el correo electrónico y la clave
    let userFound = false;
    querySnapshot.forEach((doc) => {
        const userData = doc.data();
        if (userData.password === password) {
            userFound = true;
            // Aquí puedes hacer lo que necesites con los datos del usuario, como almacenarlos en el estado de tu aplicación
        }
    });

    // Verificar si se encontró un usuario con la clave proporcionada
    if (userFound) {
        return { success: true, message: 'Inicio de sesión exitoso.' };
    } else {
        return { success: false, message: 'La contraseña no es válida.' };
    }
}