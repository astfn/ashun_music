import { CHANGE_SETTLE_SINGER_LIST } from "./constants.js";

import { getSettleSingerList } from "@/services/recommend.js";

export function changeSettleSingerList(settleSingerList) {
  return {
    type: CHANGE_SETTLE_SINGER_LIST,
    settleSingerList,
  };
}

/* 异步请求 */
export function getSettleSingerListAction(limit) {
  return (dispatch, getState) => {
    getSettleSingerList(limit, 5001).then(
      (data) => {
        console.log(data, "artist");
        dispatch(changeSettleSingerList(data.artists));
      },
      (err) => err
    );
  };
}
