import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
  addDoc,
  deleteDoc,
  Timestamp,
  updateDoc
} from 'firebase/firestore/lite';

// MRS pls create a Firestore Service separated from Auth Service
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

const config = {
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MESSAGING_SENDER_ID,
  // appId: process.env.APP_ID,
  // measurementId: process.env.MEASUREMENT_ID
  apiKey: 'AIzaSyC551QqnL5TmoX5F0PIcf8o8Nfb1gXsVVM', //process.env.API_KEY,
  authDomain: 'yesmkt-demo.firebaseapp.com', // process.env.AUTH_DOMAIN,
  projectId: 'yesmkt-demo', // process.env.PROJECT_ID,
  storageBucket: 'yesmkt-demo.appspot.com', // process.env.STORAGE_BUCKET,
  messagingSenderId: '2056023461', // process.env.MESSAGING_SENDER_ID,
  appId: '1:2056023461:web:ce09dd379322fa4ec58c4c', // process.env.APP_ID,
  measurementId: 'G-HQDW29BSYF', // process.env.MEASUREMENT_ID
};

const app = initializeApp(config);
const db = getFirestore(app);
const auth = getAuth(app);


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
  console.log(response);
  return response;
};

export const fbSignOut = async () => {
  await signOut(auth);
  return true;
};

export const fbAuthStateListener = (callback) => {
  console.log('Auth state  called');
  onAuthStateChanged(auth, (user) => {
    console.log(user)
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


// Add new post
// MRS when you get in to this Firestore Service, remember to implement like this:
// add(collection, id, data) ... collection is always plural, so singular is used, for instance like this:
// v-for(let post of posts)
async function addPost(userId, message, imageUrl, author) {
  const postCollection = collection(db, 'posts');
  return postRef = await addDoc(postCollection, { // { ...data, id }
    userId: userId,
    message: message,
    imageUrl: imageUrl,
    author: author,
    createdOn: Timestamp.fromDate(new Date())
  });
}


// Get a list of posts from your database
// MRS get(collection, args: {nick, query: { }, first/stream ... I don't know how in Vue, api: true/false (default=true)})
// MRS let me explain this api thing ... we discovered that using the Firestore API is faster than otherwise,
// so if we need just the first instead of the stream, we use the API ... if we need to listen, api: false
// nick is the program nickname in a multi-tenant platform, and is derived from the subdomain in hostname.split('.')[0]
// in the special case that we want a different nick, which is the case of cross-platform collections
// (ie, products in our rewards programs are unique for the whole platform and we specify args: {nick: 'yes4web', ...})
// with nick, we will create and use subcollections for each program, ie users/yesmkt/users or products/pepsico/products
async function getPosts(db) {
  const postCollection = collection(db, 'posts');
  const postSnapshot = await getDocs(postCollection);
  const postList = postSnapshot.docs.map(doc => doc.data());
  return postList;
}

// MRS we never use delete, it's very dangerous, all documents are active: true/false, you can remove this
async function deletePost(postId) {
 return await deleteDoc(doc(db, 'posts', postId));
}

// much more generic is update(collection, id, data)
async function updatePostText(postId, { message } ) {
  return await updateDoc(doc(db, 'posts', postId), {
    message: message,
    createdOn: Timestamp.fromDate(new Date())
  });
}

// MRS ... LATER, at least, 2 more methods:
// returns ain ID in case we need and ID before writing to the db and will use later set()
function id() { return doc('_').doc().id }
function set(collection, id, data) { ... }



export {
  db,
  getPosts,
  addPost,
  deletePost,
  updatePostText,
}
