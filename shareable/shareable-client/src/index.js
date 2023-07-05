import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import authReducer from "./state/index"
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
//import redux persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import { PersistGate } from 'redux-persist/integration/react';

//persist setup to allow for state to remain after browser refresh
const persistConfig = { key: "root", storage, version: 1 }
//setting our reducers to persisted reducer using the persist config
const persistedReducer = persistReducer(persistConfig, authReducer)
//setting store to our persisted reducers, 
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        //ignore warnings from non-serializable data
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

