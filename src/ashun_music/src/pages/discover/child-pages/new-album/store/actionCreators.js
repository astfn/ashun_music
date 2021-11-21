import { CHANGE_NEW_ALBUMS } from "./constants.js";

import { getNewAlbums } from "@/services/recommend.js";

export function changeNewAlbums(newAlbums) {
  return {
    type: CHANGE_NEW_ALBUMS,
    newAlbums,
  };
}

/* 异步请求 */

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
