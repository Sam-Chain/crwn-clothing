import { applyMiddleware, createStore } from "redux"
import  {  logger } from "redux-logger"
import persistStore from "redux-persist/es/persistStore"
import rootReducer from "./root-reducer"

const middleware = [ logger ] // for debugging

const store = createStore(rootReducer, applyMiddleware(...middleware))

const persistor = persistStore(store)


export {store, persistor}