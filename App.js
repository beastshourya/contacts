import React from "react";

import HomeStack from "./src/navigator/homeStack";
import { Provider } from "react-redux";
import { store, persistor } from "./src/store/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HomeStack />
      </PersistGate>
    </Provider>
  );
}
