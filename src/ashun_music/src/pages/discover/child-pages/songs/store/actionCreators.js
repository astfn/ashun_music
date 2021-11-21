import { CHANGE_HOT_RECOMMENDS } from "./constants.js";

import { getHotRecommends } from "@/services/recommend.js";

export function changeHotRecommends(hotRecommends) {
  return {
    type: CHANGE_HOT_RECOMMENDS,
    hotRecommends,
  };
}

/* 异步请求 */

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
