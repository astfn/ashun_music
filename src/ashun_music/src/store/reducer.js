import { combineReducers } from "redux-immutable";

import recommendReducer from "@/pages/discover/child-pages/recommend/store";
import playerReducer from "@/pages/player/store";
import userReducer from "./user";
import songsReducer from "@/pages/discover/child-pages/songs/store";
import newAlbumReducer from "@/pages/discover/child-pages/new-album/store";
import artistReducer from "@/pages/discover/child-pages/artist/store";

const reducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  user: userReducer,
  songs: songsReducer,
  newAlbum: newAlbumReducer,
  artist: artistReducer,
});
export default reducer;
