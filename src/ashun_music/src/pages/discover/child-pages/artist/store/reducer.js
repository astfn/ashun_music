import { Map } from "immutable";
import { CHANGE_SETTLE_SINGER_LIST } from "./constants.js";

const defaultState = Map({
  settleSingerList: [],
});

export default function reducer(state = defaultState, action) {
  const { type } = action;
  switch (type) {
    case CHANGE_SETTLE_SINGER_LIST: {
      return state.set("settleSingerList", action.settleSingerList);
    }
    default: {
      return state;
    }
  }
}
