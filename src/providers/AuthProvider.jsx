import {createContext, useEffect, useState } from "react";
export const AuthContext =createContext(null);
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
import { app } from './../firebase/firebase.config';

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null);
    // console.log('from authprovider user :',user)
    const [loading,setLoading] =useState(true);

   const createUser = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
   }
     
   const signIn = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
   }
   const logOut = () =>  {
     setLoading(true);
     return signOut(auth);
   }

   const updateUserProfile =  (name,photo) => {
    console.log('in update function ',name,photo)
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
   }
    useEffect( ()=> {
    const unsubscribe =  onAuthStateChanged(auth , currentUser => {
            setUser(currentUser);
            console.log('current user',currentUser);
            setLoading(false);
        })
       return () => {
        return unsubscribe();
       }
    },[])
    const authInfo = {
     user,
     loading,
     createUser,
     signIn,
     logOut,
     updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

//// jankar

// import { createContext, useEffect, useState } from "react";
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
// import { app } from "../firebase/firebase.config";

// export const AuthContext = createContext(null);

// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password)
//     }

//     const signIn = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password);
//     }

//     const logOut = () => {
//         setLoading(true);
//         return signOut(auth);
//     }

//     const updateUserProfile = (name, photo) => {
//         return updateProfile(auth.currentUser, {
//             displayName: name, photoURL: photo
//         });
//     }

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, currentUser => {
//             setUser(currentUser);
//             console.log('current user', currentUser);
//             setLoading(false);
//         });
//         return () => {
//             return unsubscribe();
//         }
//     }, [])

//     const authInfo = {
//         user,
//         loading,
//         createUser,
//         signIn,
//         logOut,
//         updateUserProfile
//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;