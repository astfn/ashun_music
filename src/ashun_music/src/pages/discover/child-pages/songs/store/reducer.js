import { Map } from "immutable";
import { CHANGE_HOT_RECOMMENDS } from "./constants.js";

const defaultState = Map({
  hotRecommends: [],
});

export default function reducer(state = defaultState, action) {
  const { type } = action;
  switch (type) {
    case CHANGE_HOT_RECOMMENDS: {
      return state.set("hotRecommends", action.hotRecommends);
    }

    default: {
      return state;
    }
  }
}
