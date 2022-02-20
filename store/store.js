import { defineStore } from 'pinia'
import { add, list, get } from '~/plugins/firestore'
// NOTE ZEE: I refactored this to use a generic store ... do you think is any drawback in this approach?
export const useStore = defineStore('global', {
  state: () => ({
    counter: 0,
    items: [],
    posts: []
  }),
  actions: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    },
    async list(collection, args) {
      try {
        const data = await list(collection, args)
        this[collection] = data ? data: null
        this.error = null;
        return this[collection]
      } catch (e) {
        this.posts = []
        this.error = e;
        return false;
      }
    },
    async add(collection, payload) {
      console.log(collection, payload)
      try {
        const data = await add(collection, payload)
        this.error = null;
        console.log(data.id)
        return data.id;
      } catch (e) {
        this.error = e;
        return false;
      }
    },
    async get(collection, id) {
      try {
        const snap = await get(collection, id)
        this.error = null
        return snap.doc()
      } catch (e) {
        this.error = e;
        return false;
      }
    }
  },
  getters: {
    counterValue: (state) => state.counter
  }
})
