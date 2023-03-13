import { createStore } from "redux";

import { mainReducer } from "./reducers";

import { AsyncStorage } from "react-native";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "persistedReducer",

  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, mainReducer);

const store = createStore(persistedReducer);

let persistor = persistStore(store);

export { store, persistor };
