import { useContext, createContext, useState, useEffect, ReactNode, Children } from "react";

interface AuthProviderProps {
    children: ReactNode;
}
const AuthContext = createContext({ isAutheticade: false, })

export function AuthProvider({ children }: AuthProviderProps) {

    const [isAutheticade, setIsAutheticade] = useState(true);

    return (
        <AuthContext.Provider value={{ isAutheticade }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);