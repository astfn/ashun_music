import { combineReducers } from "redux-immutable";

import recommendReducer from "@/pages/discover/child-pages/recommend/store";
import playerReducer from "@/pages/player/store";

const reducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
});
export default reducer;
