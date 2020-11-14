import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

 const firebaseConfig = {
		apiKey: "AIzaSyAE2tUZXM3GPw9Jjy3G5y4Fp7MINMaO-j8",
		authDomain: "pray-290920.firebaseapp.com",
		databaseURL: "https://pray-290920.firebaseio.com",
		projectId: "pray-290920",
		storageBucket: "pray-290920.appspot.com",
		messagingSenderId: "951976358196",
		appId: "1:951976358196:web:4686903027ee94f7ea3561",
		measurementId: "G-TRF9JGHQCR"
	  };
	  
	 
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
	 
const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};


export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName,  } = user;
    try {
      await userRef.set({
		displayName,  
        email,
         ...additionalData

      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};
const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()

   };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};