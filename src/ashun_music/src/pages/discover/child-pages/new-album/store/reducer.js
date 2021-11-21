import { Map } from "immutable";
import { CHANGE_NEW_ALBUMS } from "./constants.js";

const defaultState = Map({
  newAlbums: [],
});

export default function reducer(state = defaultState, action) {
  const { type } = action;
  switch (type) {
    case CHANGE_NEW_ALBUMS: {
      return state.set("newAlbums", action.newAlbums);
    }

    default: {
      return state;
    }
  }
}
