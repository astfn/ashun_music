import { Map } from "immutable";
import {
  CHANGE_CURRENT_SONG,
  CHANGE_CURRENT_SONG_INDEX,
  CHANGE_PLAY_LIST,
  CHANGE_SEQUENCE,
  CHANGE_CURRENT_LYRICS,
  CHANGE_CURRENT_LYRIC_INDEX,
  CHANGE_SONG_PAGE_IS_MOUNTED,
  CHANGE_RELEVANT_SONG_LIST,
  CHANGE_SIMILAR_SONGS,
  CLEAR_PLAY_LIST,
} from "./constants.js";
import { defaultPlayList, defaultCurrentSong } from "@/common/local-data.js";
const defaultState = Map({
  playList: [...defaultPlayList],
  currentSongIndex: 0,
  currentSong: { ...defaultCurrentSong },
  sequence: 0, //(0 循环)、(1 随机)、(2 单曲)
  currentLyrics: [],
  currentLyricIndex: 0,
  songPageIsMounted: false,
  relevantSongList: [],
  similarSongs: [],
});

function reducer(state = defaultState, action) {
  const { type } = action;
  switch (type) {
    case CHANGE_CURRENT_SONG: {
      return state.set("currentSong", action.currentSong);
    }
    case CHANGE_CURRENT_SONG_INDEX: {
      return state.set("currentSongIndex", action.currentSongIndex);
    }
    case CHANGE_PLAY_LIST: {
      return state.set("playList", action.playList);
    }
    case CLEAR_PLAY_LIST: {
      return state.set("playList", []);
    }
    case CHANGE_SEQUENCE: {
      return state.set("sequence", action.sequence);
    }
    case CHANGE_CURRENT_LYRICS: {
      return state.set("currentLyrics", action.currentLyrics);
    }
    case CHANGE_CURRENT_LYRIC_INDEX: {
      return state.set("currentLyricIndex", action.currentLyricIndex);
    }
    case CHANGE_SONG_PAGE_IS_MOUNTED: {
      return state.set("songPageIsMounted", action.songPageIsMounted);
    }
    case CHANGE_RELEVANT_SONG_LIST: {
      return state.set("relevantSongList", action.relevantSongList);
    }
    case CHANGE_SIMILAR_SONGS: {
      return state.set("similarSongs", action.similarSongs);
    }
    default: {
      return state;
    }
  }
}

export default reducer;
