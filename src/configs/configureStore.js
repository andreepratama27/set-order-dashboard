import { applyMiddleware, createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/es/storage";

import rootReducers from "../redux/ducks/";
import rootSaga from "../redux/sagas/";

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware];

const config = {
  key: "primary",
  whitelist: ["auth"],
  storage
};

let persistedReducer = persistReducer(config, rootReducers);

let store = createStore(
  persistedReducer,
  composeWithDevTools(compose(applyMiddleware(...middleware)))
);

sagaMiddleware.run(rootSaga);

let persistor = persistStore(store);

export { store, persistor };
