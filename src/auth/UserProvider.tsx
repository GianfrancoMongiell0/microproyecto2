import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase"; // Import Usercontext from the appropriate file
import { UserContext } from "../controllers/Users";
import React from "react";

export default function UseProvider({ children }: { children: React.ReactNode }) {
    const UserContext = React.createContext<User | null>(null);
    const [user, setUser] =  React.useState<User | null>(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user !== null ? 'Usuario logueado' : 'Usuario deslogueado');
            setUser(user);
        });
    }, []);
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}