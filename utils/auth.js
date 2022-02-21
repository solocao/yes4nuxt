import {
  doc,
  getDoc,
  setDoc,
  Timestamp
} from 'firebase/firestore/lite';

import {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from 'firebase/auth';

// MRS: nuxtApp is context of Nuxt. it contains the $firebaseAuth as Provider.
// I don't find the direct import to here and also firestore.js
// So I passed it through function params
// const auth = nuxtApp.$firebaseAuth;

export const fbCreateAccount = async (
  auth,
  db,
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
    await fbSetUserProfile({auth, db, email, firstname, lastname, phone });
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

export const fbSignIn = async (auth, email, password) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  console.log('Successful: ', response.user.email);
  return response;
};

export const fbSignOut = async (auth) => {
  await signOut(auth);
  return true;
};

export const fbResetPassword = async (auth, email) => {
  const response = await sendPasswordResetEmail(auth, email);
  return response
}

export const fbAuthStateListener = (auth, callback) => {
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

export const fbSetUserProfile = async ({auth, db, email, firstname, lastname, phone}) => {
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

export const fbGetUserProfile = async (auth, db) => {
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
