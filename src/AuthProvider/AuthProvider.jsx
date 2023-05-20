import  { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import app from '../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app);



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect ( () =>{
        const unsubscribe = onAuthStateChanged(auth, currenUser => {

            setUser(currenUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    },[]);

    

    const authInfo = {
        user,
        register,
        login,
        logout,
        auth,
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}


export default AuthProvider;