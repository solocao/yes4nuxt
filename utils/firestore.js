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

import { useStore } from '~/store/store'


export async function set(db, col, id, data) {
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
export async function add(db, col, data) {
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
export async function get(db, col, id) {
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
export async function remove(db, col, id) {
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
export async function list(db, col, args) {
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

// // import axios from 'axios'
// import FireStoreParser from 'firestore-parser'
// export const fbApi = 'https://firestore.googleapis.com/v1/projects'
// export async function apiGet(collection, id, subcollection = null, nick = null) {
//   // const res = await useFetch(`${fbApi}/${fbCfg.projectId}/databases/(default)/documents/${collection}/${subcollection && store.nick ? `${store.nick}/${subcollection}/` : ''}${id}`)
//   const res = await useFetch(`${fbApi}/${fbCfg.projectId}/databases/(default)/documents/${collection}/${subcollection && store.nick ? `${store.nick}/${subcollection}/` : ''}${id}`)
//   return FireStoreParser(res.data.fields)
// }
