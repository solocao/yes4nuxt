
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  getDoc,
  where,
  query,
  Timestamp,
  updateDoc,
  getDocs,
} from 'firebase/firestore/lite'

import { fbApp, fbCfg } from './firebase'

const db = getFirestore(fbApp)
import { useStore } from '~/store/store'
// // Add new item
// // MRS when you get in to this Firestore Service, remember to implement like this:
// // add(collection, id, data) ... collection is always plural, so singular is used, for instance like this:
// // v-for(let post of posts)
// async function add(collectionName, payload) {
//   const itemCollection = collection(db, collectionName)
//   return await addDoc(itemCollection, payload)
// }

// // Set item
// async function setItem(collectionName, id, payload) {
//   const itemDoc = doc(db, collectionName, id)
//   return await setDoc(itemDoc, payload)
// }

// // Get item

// async function get(collectionName, id) {
//   const docRef = doc(db, collectionName, id)
//   return await getDoc(docRef)
// }

// // Get items as list

// async function list(collectionName, param, value) {
//   const store = useStore()
//   console.log(store.nick)
//   const q = query(collection(db, collectionName), where(param, '==', value))
//   const querySnapshot = await getDocs(q)
//   const result = []
//   querySnapshot.forEach((doc) => {
//     var snap = doc.data()
//     snap.id = doc.id
//     result.push(snap)
//   })
//   return result
// }

// // much more generic is update(collection, id, data)
// async function updateItem(collectionName, id, payload) {
//   return await updateDoc(doc(db, collectionName, id), {
//     payload,
//   })
// }
// // MRS ... LATER, at least, 2 more methods:
// // returns ain ID in case we need and ID before writing to the db and will use later set()
// // function id() { return doc('_').doc().id }
// // function set(collection, id, data) { ... }

export async function set(col, id, data) {
  const store = useStore()
  const docRef = doc(db, col + '/' + store.nick + '/' + col + '/' + id)
  try {
    await setDoc(docRef, data)
  } catch (e) {
    console.log(e)
    return
  }
  console.log('Success.')
}
export async function add(col, data) {
  const store = useStore()
  const colRef = collection(db, col + '/' + store.nick + '/' + col)
  try {
    await setDoc(colRef, data)
  } catch (e) {
    console.log(e)
    return
  }
  console.log('Success.')
}
export async function get(col, id) {
  const store = useStore()
  const docRef = doc(db, col + '/' + store.nick + '/' + col + '/' + id)
  try {
    const snapshot = await getDoc(docRef)
    const doc = snapshot.data()
    if (!doc) {
      console.log('Document does not exist.')
      return
    }
    return doc
  } catch (e) {
    console.log(e)
  }
}
export async function remove(col, id) {
  const store = useStore()
  const docRef = doc(db, col + '/' + store.nick + '/' + col + '/' + id)
  try {
    const snapshot = await deleteDoc(docRef)
    const doc = snapshot.data()
    if (!doc) {
      console.log('Document does not exist.')
      return
    }
    return doc
  } catch (e) {
    console.log(e)
  }
}
export async function list(col, args) {
  const store = useStore()
  const constraints = []
  if (args.where)
    for (let w of args.where) {
      constraints.push(where(...w))
    }
  if (args.order)
    for (let o of args.order) {
      constraints.push(order(...o))
    }
  if (args.limit)
    for (let l of args.limit) {
      constraints.push(limit(...l))
    }
  const q = query(
    collection(db, col + '/' + store.nick + '/' + col),
    ...constraints
  )
  const querySnapshot = await getDocs(q)
  const docs = []
  querySnapshot.forEach((doc) => {
    let _doc = doc.data()
    _doc.id = doc.id
    docs.push(_doc)
  })
  return docs
}

import axios from 'axios'
import FireStoreParser from 'firestore-parser'
export const fbApi = 'https://firestore.googleapis.com/v1/projects'
export async function apiGet(collection, id, subcollection = null, nick = null) {
  const res = await axios.get(`${fbApi}/${fbCfg.projectId}/databases/(default)/documents/${collection}/${subcollection && store.nick ? `${store.nick}/${subcollection}/` : ''}${id}`)
  return FireStoreParser(res.data.fields)
}
