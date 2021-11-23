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
  theme: {
    "--color-deep": "#ad4e00",
    "--color-middle": "#d46b08",
    "--color-shallow": "#fa8c16",
    "--color-light": "#ffa940",
    "--color-near-white": "#fff7e6",
  },
});
