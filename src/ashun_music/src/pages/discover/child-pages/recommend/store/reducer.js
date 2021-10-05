import { Map } from "immutable";
import {
  CHANGE_TOP_BANNERS,
  CHANGE_HOT_RECOMMENDS,
  CHANGE_NEW_ALBUMS,
  CHANGE_TOP_UP_LIST,
  CHANGE_TOP_NEW_LIST,
  CHANGE_TOP_ORIGIN_LIST,
  CHANGE_SETTLE_SINGER_LIST,
} from "./constants.js";

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  topUpList: {},
  topNewList: {},
  topOriginList: {},
  settleSingerList: [],
});

export default function reducer(state = defaultState, action) {
  const { type } = action;
  switch (type) {
    case CHANGE_TOP_BANNERS: {
      return state.set("topBanners", action.topBanners);
    }
    case CHANGE_HOT_RECOMMENDS: {
      return state.set("hotRecommends", action.hotRecommends);
    }
    case CHANGE_NEW_ALBUMS: {
      return state.set("newAlbums", action.newAlbums);
    }
    case CHANGE_TOP_UP_LIST: {
      return state.set("topUpList", action.topUpList);
    }
    case CHANGE_TOP_NEW_LIST: {
      return state.set("topNewList", action.topNewList);
    }
    case CHANGE_TOP_ORIGIN_LIST: {
      return state.set("topOriginList", action.topOriginList);
    }
    case CHANGE_SETTLE_SINGER_LIST: {
      return state.set("settleSingerList", action.settleSingerList);
    }
    default: {
      return state;
    }
  }
}
