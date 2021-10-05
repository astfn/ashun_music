import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer.js";
import ThunkMiddleWare from "redux-thunk";
/* saga */
// import createSagaMiddleware from "redux-saga";
// import mySaga from "./testSaga";

// const composeEnhancer =
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

// const SagaMiddleWare = createSagaMiddleware();

const enhancers = applyMiddleware(ThunkMiddleWare);
const store = createStore(reducer, enhancers);

// SagaMiddleWare.run(mySaga);
export default store;
