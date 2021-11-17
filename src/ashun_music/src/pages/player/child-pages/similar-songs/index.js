import { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import {
  getSimilarSongsAction,
  getCurrentSongAction,
} from "../../store/actionCreators.js";

import { ASSimilarSongsWrapper } from "./style.js";
import ASThemeHeaderSmall from "@/components/theme-header-small";

const ASSimilarSongs = (props) => {
  /*  redux hook */
  const dispatch = useDispatch();
  const { currentSong, similarSongs } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      similarSongs: state.getIn(["player", "similarSongs"]),
    }),
    shallowEqual
  );
  const { id } = currentSong;

  useEffect(() => {
    dispatch(getSimilarSongsAction(id));
  }, [dispatch, id]);

  console.log(similarSongs);

  //handle event
  const playSong = (id) => {
    dispatch(getCurrentSongAction(id));
  };

  return (
    <ASSimilarSongsWrapper>
      <ASThemeHeaderSmall title="相似歌曲" />
      <div className="content">
        {similarSongs.map((item, index) => {
          const names = item.artists.map((v) => v.name).join("/");
          return (
            <div key={item.id} className="item">
              <div className="info">
                <a
                  href="/#"
                  className="song-name text-nowrap"
                  onClick={(e) => e.preventDefault()}
                >
                  {item.name}
                </a>
                <a
                  href="/#"
                  className="artist-name text-nowrap"
                  onClick={(e) => e.preventDefault()}
                >
                  {names}
                </a>
              </div>
              <div className="operations">
                <button
                  className="play sprite_icon3"
                  onClick={(e) => playSong(item.id)}
                ></button>
                <button className="addto sprite_icon3"></button>
              </div>
            </div>
          );
        })}
      </div>
    </ASSimilarSongsWrapper>
  );
};

export default memo(ASSimilarSongs);
