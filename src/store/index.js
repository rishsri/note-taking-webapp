// store.js

import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducers from '../slices';
import rootSaga from '../redux-saga/root-saga';

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducers) 

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware]
})

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)