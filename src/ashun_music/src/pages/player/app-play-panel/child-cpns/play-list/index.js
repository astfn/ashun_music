import { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getCurrentSongAction } from "../../../store/actionCreators.js";
import { formatSongTime } from "@/utils/format-utils.js";
import { PlayListWrapper } from "./style.js";
import classNames from "classnames";

const ASPlayList = (props) => {
  //redux hook
  const dispatch = useDispatch();
  const { playList, currentSong } = useSelector(
    (state) => ({
      playList: state.getIn(["player", "playList"]),
      currentSong: state.getIn(["player", "currentSong"]),
    }),
    shallowEqual
  );

  //handle event
  const playSong = (song) => {
    dispatch(getCurrentSongAction(song.id));
  };
  //其它业务
  const isActiveSong = (id) => {
    return currentSong.id === id;
  };
  //render相关
  const getSongInfo = (song) => {
    const { name, ar, al, dt, id } = song;
    const arList = ar || [];
    const result = {
      name,
      id,
      imgUrl: al ? al.picUrl : "",
      duration: dt,
      singerNames: arList.map((v) => v.name).join("/"),
    };
    return result;
  };

  const { width = "100%", height = "100%" } = props;
  const propsStyle = {
    width,
    height,
  };
  return (
    <PlayListWrapper {...propsStyle}>
      <div className="content">
        {playList.map((song, index) => {
          const Info = getSongInfo(song);
          return (
            <div
              key={Info.id}
              className={classNames("item", {
                "active-song": isActiveSong(Info.id),
              })}
              onClick={() => {
                playSong(song);
              }}
            >
              <i
                className={classNames("play", "sprite_playlist", {
                  active: isActiveSong(Info.id),
                })}
              />
              <span className="song-name text-nowrap">{Info.name}</span>
              <span className="artist-name text-nowrap">
                {Info.singerNames}
              </span>
              <span className="song-duration">
                {formatSongTime(Info.duration)}
              </span>
              <i className="album-link sprite_playlist" />
            </div>
          );
        })}
      </div>
    </PlayListWrapper>
  );
};
export default memo(ASPlayList);
