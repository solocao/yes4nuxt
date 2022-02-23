
import { defineStore, acceptHMRUpdate } from "pinia";
import {
  fbAuthStateListener,
  fbCreateAccount,
  fbGetUserProfile,
  fbResetPassword,
  fbSignIn,
  fbSignOut,
} from "~~/utils/auth";
import { list } from '~~/utils/firestore'


export const useAuthStore = defineStore('authStore', {
  state: () => ({
    user: null,
    profile: null,
    error: '',
  }),
  getters: {
    isLoggedIn: (state) => state.user !== null,
    userError: (state) => state.error,
  },
  actions: {
    async initializeAuthListener() {
      return new Promise((resolve) => {
        fbAuthStateListener(($nuxt.$firebaseAuth), async (user) => {
          this.user = user ? user : null;
          console.log('Running user: ', user);
          if (user) {
            const profile = (await fbGetUserProfile($nuxt.$firebaseAuth, $nuxt.$firestoreDb));
            this.profile = profile;
            console.log('Profile: ', profile);
          }
          resolve(true);
        });
      });
    },
    async logInUser(email, password) {
      try {
        const response = await fbSignIn($nuxt.$firebaseAuth, email, password);
        this.user = response.user ? response.user : null;
        this.error = '';
        return true;
      } catch (e) {
        this.user = null;
        this.error = e.code;
        return false;
      }
    },
    async logoutUser() {
      try {
        await fbSignOut($nuxt.$firebaseAuth);
        console.log('Logged out sucess');
        this.user = null;
        this.profile = null;
        this.error = '';
        return true;
      } catch (e) {
        this.error = e.code;
        return false;
      }
    },
    async createAccount(email, password, firstname, lastname, phone) {
      try {
        const {user, profile} = await fbCreateAccount($nuxt.$firebaseAuth, $nuxt.$firestoreDb, email, password, firstname, lastname, phone);
        this.user = user ? user : null;
        this.profile = profile ? profile : null;
        this.error = '';
        return true;
      } catch (e) {
        this.user = null;
        this.error = e.code;
        return false;
      }
    },
    async resetPassword(email) {
      try {
        await list($nuxt.$firestoreDb, 'users', 'email', email).then(async (snap) => {
          if(!snap.empty) {
            this.error = '';
            await fbResetPassword($nuxt.$firebaseAuth, email)
            return true;
          } else {
            return false;
          }
        });
      } catch (e) {
        this.error = e.code;
        return false;
      }
    }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}