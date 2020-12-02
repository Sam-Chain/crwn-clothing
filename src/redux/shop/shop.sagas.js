import ShopActionTypes from "./shop.types"
import {takeEvery} from 'redux-saga/effects'

export function* fetchCollectionsAsync() {
    yield console.log('i am started');
    // yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, )
}

export function* fetchCollectionsStart() {
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}