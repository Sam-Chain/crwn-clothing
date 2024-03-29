import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils"

import ShopActionTypes from "./shop.types"


export const fetchCollectionsStart = collectionsMap => (
    {
        type: ShopActionTypes.FETCH_COLLECTIONS_START,
    }
)

export const fetchCollectionsSuccess = collectionsMap => (
    {
        type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: collectionsMap
    }
)

export const fetchCollectionsFailure = errorMessage => (
    {
        type: ShopActionTypes.fetchCollectionsFailure,
        payload: errorMessage
    }
)

//thunks // moved to saga
// export const fetchCollectionsStartAsync = () => {
//     return dispatch => {
//         const collectionRef = firestore.collection('collections')
//         dispatch(fetchCollectionsStart())
//         collectionRef.get().then(snapshot => { 
//             const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
//             dispatch(fetchCollectionsSuccess(collectionsMap)) 
//             // this.setState({loading: false})
//          }).catch(error => dispatch(fetchCollectionsFailure()))
//     }
// }