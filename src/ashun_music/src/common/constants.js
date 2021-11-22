import { defaultPlayList } from "./local-data.js";

export const HOT_RECOMMEND_LIMIT = 8;

export const NEW_ALBUMS_LIMIT = 14;
export const NEW_ALBUMS_PER_PAGE_NUM = 5;
export const SETTLE_SINGER_LIMIT = 5;

export const createUser = ({ phone, nickName, password }) => ({
  phone,
  nickName,
  password,
  playList: defaultPlayList,
  starSongs: [],
});
