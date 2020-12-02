import { createSelector } from "reselect"


const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key])// object to array
                                : []
)

export const selectCollection = collectionId => createSelector (
    [selectCollections],
    collections => collections ? collections[collectionId] : null
)

export const selectIsCollectionFetching = createSelector(//params
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections //convert the value to boolean
)