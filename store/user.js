
import { defineStore } from "pinia";
import {
  fbAuthStateListener,
  fbCreateAccount,
  fbGetUserProfile,
  fbResetPassword,
  fbSignIn,
  fbSignOut,
} from "~/plugins/auth";
import { list } from '~/plugins/firestore'


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
        fbAuthStateListener(async (user) => {
          this.user = user ? user : null;
          console.log('Running user: ', user);
          if (user) {
            const profile = (await fbGetUserProfile());
            this.profile = profile;
            console.log('Profile: ', profile);
          }
          resolve(true);
        });
      });
    },
    async logInUser(email, password) {
      try {
        const response = await fbSignIn(email, password);
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
        await fbSignOut();
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
        const {user, profile} = await fbCreateAccount(email, password, firstname, lastname, phone);
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
        await list('users', 'email', email).then(async (snap) => {
          if(!snap.empty) {
            this.error = '';
            await fbResetPassword(email)
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
