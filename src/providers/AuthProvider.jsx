import {createContext, useEffect, useState } from "react";
export const AuthContext =createContext(null);
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { app } from './../firebase/firebase.config';
import axios from "axios";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null);
    // console.log('from authprovider user :',user)
    const [loading,setLoading] =useState(true);
    const googleProvider = new GoogleAuthProvider();


   const createUser = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
   }
     
   const signIn = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
   }
   
   const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
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

        //     // get and set token
        //    if(currentUser){
        //     console.log('in if user')
        //     axios.post('http://localhost:5000/jwt',{email:currentUser.email})
        //     .then(data=>{
        //         console.log("data.data.token---->>> ",data.data.token);
        //         localStorage.setItem('access-token',data.data.token)
        //     })
        //    }
        //    else {
        //     localStorage.removeItem('access-token',)
        //    }

          if(currentUser){
            console.log('has current user')
            axios.post('http://localhost:5000/jwt',{email:currentUser.email})
            .then(data=>{
                console.log("data.data.token---->>> ",data.data.token);
               localStorage.setItem('access-token',data.data.token)

            })
          }
          else {
            localStorage.removeItem('access-token',)
          }

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
     googleSignIn,
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