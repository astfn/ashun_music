import {
  CHANGE_TOP_BANNERS,
  CHANGE_HOT_RECOMMENDS,
  CHANGE_NEW_ALBUMS,
  CHANGE_TOP_UP_LIST,
  CHANGE_TOP_NEW_LIST,
  CHANGE_TOP_ORIGIN_LIST,
  CHANGE_SETTLE_SINGER_LIST,
} from "./constants.js";

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList,
  getSettleSingerList,
} from "@/services/recommend.js";

export function changeTopBannersAction(topBanners) {
  return {
    type: CHANGE_TOP_BANNERS,
    topBanners,
  };
}
export function changeHotRecommends(hotRecommends) {
  return {
    type: CHANGE_HOT_RECOMMENDS,
    hotRecommends,
  };
}
export function changeNewAlbums(newAlbums) {
  return {
    type: CHANGE_NEW_ALBUMS,
    newAlbums,
  };
}

export function changeTopUpList(topUpList) {
  return {
    type: CHANGE_TOP_UP_LIST,
    topUpList,
  };
}
export function changeTopNewList(topNewList) {
  return {
    type: CHANGE_TOP_NEW_LIST,
    topNewList,
  };
}
export function changeTopOriginList(topOriginList) {
  return {
    type: CHANGE_TOP_ORIGIN_LIST,
    topOriginList,
  };
}
export function changeSettleSingerList(settleSingerList) {
  return {
    type: CHANGE_SETTLE_SINGER_LIST,
    settleSingerList,
  };
}

/* 异步请求 */
export function getTopBannersAction() {
  return (dispatch, getState) => {
    getTopBanners().then(
      (data) => {
        dispatch(changeTopBannersAction(data.banners));
      },
      (err) => err
    );
  };
}

export function getHotRecommendsAction(limit) {
  return (dispatch, getState) => {
    getHotRecommends(limit).then(
      (data) => {
        dispatch(changeHotRecommends(data.result));
      },
      (err) => err
    );
  };
}

export function getNewAlbumsAction(limit) {
  return (dispatch, getState) => {
    getNewAlbums(limit).then(
      (data) => {
        dispatch(changeNewAlbums(data.albums));
      },
      (err) => err
    );
  };
}

export function getTopListAction(idx) {
  return (dispatch, getState) => {
    getTopList(idx).then(
      (data) => {
        const { playlist } = data;
        switch (idx) {
          case 0: {
            dispatch(changeTopNewList(playlist));
            break;
          }
          case 2: {
            dispatch(changeTopOriginList(playlist));
            break;
          }
          case 3: {
            dispatch(changeTopUpList(playlist));
            break;
          }
          default: {
            console.log("获取榜单失败：没有匹配的idx");
            break;
          }
        }
      },
      (err) => err
    );
  };
}

export function getSettleSingerListAction() {
  return (dispatch, getState) => {
    getSettleSingerList(5, 5001).then(
      (data) => {
        dispatch(changeSettleSingerList(data.artists));
      },
      (err) => err
    );
  };
}
