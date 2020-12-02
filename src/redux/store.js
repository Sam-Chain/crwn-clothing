import { applyMiddleware, createStore } from "redux"
import  {  logger } from "redux-logger"
import persistStore from "redux-persist/es/persistStore"
import thunk from "redux-thunk" // replaced by saga
// import createSagaMiddleware from 'redux-saga'
import rootReducer from "./root-reducer"

// const sagaMiddleware = createSagaMiddleware()

const middleware = [thunk] 
// const middleware = [sagaMiddleware] 

if(process.env.NODE_ENV === 'development'){
    middleware.push(logger) // for debugging
}

const store = createStore(rootReducer, applyMiddleware(...middleware))

// sagaMiddleware.run()

const persistor = persistStore(store)


export {store, persistor}