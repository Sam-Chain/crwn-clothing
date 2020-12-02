import firebase from 'firebase/app';

import 'firebase/firestore'
import 'firebase/auth'


const config = {
  apiKey: "AIzaSyCDjTuU8anfvW2bfzWJVaYBBvUb-TTaB18",
  authDomain: "crwn-clothing-80a9b.firebaseapp.com",
  databaseURL: "https://crwn-clothing-80a9b.firebaseio.com",
  projectId: "crwn-clothing-80a9b",
  storageBucket: "crwn-clothing-80a9b.appspot.com",
  messagingSenderId: "117078372569",
  appId: "1:117078372569:web:18e450a82ea2eb12b00ec8",
  measurementId: "G-DV34TGCV4R"
}

export const createUserProfileDocument = async (userAuth, additionalData)=>{
    
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`) //doc reference(crud)

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef
    // console.log(snapShot);
}

export const convertCollectionsSnapshotToMap  = collections => {
    const transformedCollection = collections.docs
    // .map(doc => ({ id: doc.id, routName: encodeURI, ...doc.data() }))  // my solution
    .map(doc => {
        const {title, items} = doc.data()

        return {
            routName: encodeURI(title.toLowerCase()), // js method in (js renderer) removes any characters that the url doesn't recognize
            id: doc.id,
            title,
            items
        }
    })

    return transformedCollection.reduce( (obj, collection) => {
        obj[collection.title.toLowerCase()] = collection
        return obj
    }, {})
}

// adding data to fire-store
// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
//     const collectionRef = firestore.collection(collectionKey)

//     const batch = firestore.batch()
//     objectsToAdd.forEach(obj => { // same as map() but doesn't return
//         const newDocRef = collectionRef.doc()
//         batch.set(newDocRef, obj)
//     })

//     return await batch.commit()
// }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = ()=> auth.signInWithPopup(provider)

export default firebase