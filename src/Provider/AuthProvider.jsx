import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/FirebaseConfig";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signUpUser = (email, Password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, Password)
    }

    const updateUser = (updateuser) => {
        return updateProfile(auth.currentUser, updateuser)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOut1 = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubs = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser)
            setLoading(false)
        })
        return () => {
            unSubs()
        }
    }, [])

    const userInfo = {
        loading,
        setLoading,
        user,
        updateUser,
        signUpUser,
        signIn,
        signOut1,
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;