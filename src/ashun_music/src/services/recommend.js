import { interface1 } from "./request";

export function getTopBanners() {
  return interface1({
    url: "/banner",
  });
}
export function getHotRecommends(limit) {
  return interface1({
    url: "/personalized",
    params: {
      limit,
    },
  });
}
export function getNewAlbums(limit) {
  return interface1({
    url: "/top/album",
    params: {
      limit,
    },
  });
}

export function getTopList(idx) {
  return interface1({
    url: "/top/list",
    params: {
      idx,
    },
  });
}
export function getSettleSingerList(limit, cat) {
  return interface1({
    url: "/artist/list",
    params: {
      limit,
      cat,
    },
  });
}
