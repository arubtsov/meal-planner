import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './root-reducer'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)
