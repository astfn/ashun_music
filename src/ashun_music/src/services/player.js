import { interface1 } from "./request.js";

export function getCurrentSong(ids) {
  return interface1({
    url: "/song/detail",
    params: {
      ids,
    },
  });
}

export function getLyric(id) {
  return interface1({
    url: "/lyric",
    params: {
      id,
    },
  });
}

export function getRelevantSongList(id) {
  return interface1({
    url: "/simi/playlist",
    params: {
      id,
    },
  });
}

export function getSimilarSongs(id) {
  return interface1({
    url: "/simi/song",
    params: {
      id,
    },
  });
}
