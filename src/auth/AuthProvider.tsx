import { useContext, createContext, useState,  ReactNode } from "react";

interface AuthProviderProps {
    children: ReactNode;
}
const AuthContext = createContext({ isAutheticade: false, })

export function AuthProvider({ children }: AuthProviderProps) {

    const [isAutheticade] = useState(true);

    return (
        <AuthContext.Provider value={{ isAutheticade }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
