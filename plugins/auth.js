import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Timestamp
} from 'firebase/firestore/lite';

// MRS pls create a Firestore Service separated from Auth Service
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from 'firebase/auth';

import { fbApp } from './firebase'

const db = getFirestore(fbApp);
const auth = getAuth(fbApp);

export const fbCreateAccount = async (
  email,
  password,
  firstname,
  lastname,
  phone
) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  console.log(response);
  if (response) {
    console.log('Create res: ', response);
    await fbSetUserProfile({ email, firstname, lastname, phone });
    const profile = await fbGetUserProfile();
    return {
      user: response.user,
      profile,
    };
  } else {
    return {
      user: null,
      profile: null,
    };
  }
};

export const fbSignIn = async (email, password) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  console.log('Successful: ', response.user.email);
  return response;
};

export const fbSignOut = async () => {
  await signOut(auth);
  return true;
};

export const fbResetPassword = async (email) => {
  const response = await sendPasswordResetEmail(auth, email);
  return response
}

export const fbAuthStateListener = (callback) => {
  console.log('Auth state  called');
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      return user
      // callback(user);
    } else {
      // User is signed out
      callback(null);
    }
  });
};

export const fbSetUserProfile = async ({email, firstname, lastname, phone}) => {
  const user = auth.currentUser;
  console.log(user);

  const ref = doc(db, "users", user.uid);
  await setDoc(
    ref,
    {
      email: email,
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      userId: user.uid,
      createdOn: Timestamp.fromDate(new Date())
    },
    { merge: true }
  );
  return true;
};

export const fbGetUserProfile = async () => {
  const user = auth.currentUser;
  console.log(user);

  const ref = doc(db, "users", user.uid);
  const docSnap = await getDoc(ref);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return {
      ...docSnap.data(),
      uid: user.uid,
    };
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!", user.uid);
    return null;
  }
};
