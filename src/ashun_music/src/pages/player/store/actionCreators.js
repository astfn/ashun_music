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

import {
  getCurrentSong,
  getLyric,
  getRelevantSongList,
  getSimilarSongs,
} from "@/services/player.js";

import { formatLyricAsArray } from "@/utils/format-utils.js";

export const changeCurrentSong = (currentSong) => ({
  type: CHANGE_CURRENT_SONG,
  currentSong,
});
export const changeCurrentSongIndex = (currentSongIndex) => ({
  type: CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex,
});
export const changePlayList = (playList) => ({
  type: CHANGE_PLAY_LIST,
  playList,
});
export const clearPlayList = () => ({
  type: CLEAR_PLAY_LIST,
});
export const changeSequence = (sequence) => ({
  type: CHANGE_SEQUENCE,
  sequence,
});
export const changeCurrentLyrics = (currentLyrics) => ({
  type: CHANGE_CURRENT_LYRICS,
  currentLyrics,
});
export const changeCurrentLyricIndex = (currentLyricIndex) => ({
  type: CHANGE_CURRENT_LYRIC_INDEX,
  currentLyricIndex,
});
export const changeSongPageIsMounted = (songPageIsMounted) => ({
  type: CHANGE_SONG_PAGE_IS_MOUNTED,
  songPageIsMounted,
});
export const changeRelevantSongList = (relevantSongList) => ({
  type: CHANGE_RELEVANT_SONG_LIST,
  relevantSongList,
});
export const changeSimilarSongs = (similarSongs) => ({
  type: CHANGE_SIMILAR_SONGS,
  similarSongs,
});

/* redux-thunk */
export const changeCurrentSongByIndex = (num) => {
  return (dispaych, getState) => {
    const sequence = getState().getIn(["player", "sequence"]);
    const playList = getState().getIn(["player", "playList"]);
    const currentSongIndex = getState().getIn(["player", "currentSongIndex"]);
    let newIndex;
    switch (sequence) {
      case 1: {
        newIndex = Math.floor(Math.random() * playList.length);
        //如果随机数与原来的index相同，则继续生成
        while (newIndex === currentSongIndex) {
          newIndex = Math.floor(Math.random() * playList.length);
        }
        break;
      }
      default: {
        newIndex = currentSongIndex + num;
        if (newIndex >= playList.length) newIndex = 0;
        if (newIndex < 0) newIndex = playList.length - 1;
      }
    }
    dispaych(changeCurrentSong(playList[newIndex]));
    dispaych(changeCurrentSongIndex(newIndex));

    //获取歌词
    getLyric(playList[newIndex].id).then(
      (res) => {
        const lrcString = res.lrc.lyric;
        const lyrics = formatLyricAsArray(lrcString);
        dispaych(changeCurrentLyrics(lyrics));
      },
      (err) => err
    );
  };
};

/* 网络请求 */
export const getCurrentSongAction = (ids) => {
  return (dispaych, getState) => {
    const playList = [...getState().getIn(["player", "playList"])];
    const findIndex = playList.findIndex((item) => item.id === ids);
    if (findIndex === -1) {
      getCurrentSong(ids).then(
        (res) => {
          const song = res.songs ? res.songs[0] : null;
          if (!song) return;
          playList.push(song);
          dispaych(changeCurrentSong(song));
          dispaych(changePlayList(playList));
          dispaych(changeCurrentSongIndex(playList.length - 1));
          console.log(JSON.stringify(song, null, 2));
        },
        (err) => err
      );
    } else {
      dispaych(changeCurrentSong(playList[findIndex]));
      dispaych(changeCurrentSongIndex(findIndex));
    }
    console.log(playList);
    //获取歌词
    getLyric(ids).then(
      (res) => {
        const lrcString = res.lrc.lyric;
        const lyrics = formatLyricAsArray(lrcString);
        dispaych(changeCurrentLyrics(lyrics));
      },
      (err) => err
    );
  };
};

export const getRelevantSongListAction = (id) => {
  return (dispatch, getState) => {
    getRelevantSongList(id).then(
      (res) => {
        dispatch(changeRelevantSongList(res.playlists));
        console.log(res);
      },
      (err) => err
    );
  };
};

export const getSimilarSongsAction = (id) => {
  return (dispatch, getState) => {
    getSimilarSongs(id).then(
      (res) => {
        dispatch(changeSimilarSongs(res.songs));
        console.log(res);
      },
      (err) => err
    );
  };
};
