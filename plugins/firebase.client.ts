
import { defineNuxtPlugin } from '#app';
import { FirebaseApp, initializeApp  } from 'firebase/app';
import { Firestore, getFirestore} from 'firebase/firestore/lite'

// MRS pls create a Firestore Service separated from Auth Service
import {
  Auth,
  getAuth,
} from 'firebase/auth';

declare module '#app' {
  interface NuxtApp {
    $firebaseApp: FirebaseApp;
    $firebaseAuth: Auth;
    $firestoreDb: Firestore;
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: config.firebaseApiKey,
    authDomain: config.firebaseAuthDomain,
    projectId: config.firebaseProjectId,
    storageBucket: config.firebaseStorageBucket,
    messagingSenderId: config.firebaseMessagingSenderId,
    appId: config.firebaseAppId,
    measurementId: config.firebaseMeasurementId,
  };

  const app = initializeApp(firebaseConfig);

  nuxtApp.provide('firebaseApp', app);
  nuxtApp.provide('firestoreDb', getFirestore(app))
  nuxtApp.provide('firebaseAuth', getAuth(app));
});
