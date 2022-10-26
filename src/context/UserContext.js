import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    //New User Registration
    const newUserRegister = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password);
    };

    //Update User Profile
    const updateUserProfileData = (name) =>{
        return updateProfile(auth.currentUser, {displayName: name});
    };

    //Login Registred User with Email & Password
    const signInExistingUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    };

    //Google Sign In
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    };

    //Github Sign In
    const signInWithGitHub = () =>{
        return signInWithPopup(auth, githubProvider);
    };

    //Get Current User
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
        })
        return () => unsubscribe();
    }, []);

    //LogOut User
    const logOut = () =>{
        return signOut(auth);
    };

    const authInfo = {user, newUserRegister, signInExistingUser, updateUserProfileData, signInWithGoogle, signInWithGitHub, logOut };
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;