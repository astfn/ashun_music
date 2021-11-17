import { memo, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { ASPlayerInfoWrapper, Portrait, InfoContent } from "./style.js";

const ASPlayerInfo = (props) => {
  const [isSpread, setIsSpread] = useState(false);

  /*  redux hook */
  const { currentSong, currentLyrics } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      currentLyrics: state.getIn(["player", "currentLyrics"]),
    }),
    shallowEqual
  );
  const { name, ar, al, dt, id } = currentSong;
  const arList = ar || [];
  const currentSongInfo = {
    songInfo: {
      name,
      id,
      albumName: al.name,
      imgUrl: al ? al.picUrl : "",
      duration: dt,
    },
    singerNames: arList.map((v) => v.name).join("/"),
  };

  /* render相关 */

  const renderInfo = () => (
    <div className="info">
      <div className="name_box">
        <i className="icon sprite_icon2" />
        <span>{currentSongInfo.songInfo.name}</span>
      </div>
      <div className="desc">
        <p>
          歌手：
          <a href="/#" onClick={(e) => e.preventDefault()}>
            {currentSongInfo.singerNames}
          </a>
        </p>
        <p>
          所属专辑：
          <a href="/#" onClick={(e) => e.preventDefault()}>
            Ashuntefannao😀/{currentSongInfo.songInfo.albumName}
          </a>
        </p>
      </div>
    </div>
  );
  // handle code
  const totalLyricCount = isSpread ? currentLyrics.length : 13;

  const renderOperations = () => (
    <div className="operations">
      <div className="prominentBTN">
        <button className="play sprite_button">播放</button>
        <button className="addto sprite_button">+</button>
      </div>
      <div className="otherBTN">
        <button className="star sprite_button">
          <span className="right_bg sprite_button">收藏</span>
        </button>
        <button className="share sprite_button">
          <span className="right_bg sprite_button">分享</span>
        </button>
        <button className="down sprite_button">
          <span className="right_bg sprite_button">下载</span>
        </button>
        <button className="comment_sum sprite_button">
          <span className="right_bg sprite_button">(9999)</span>
        </button>
      </div>
    </div>
  );

  return (
    <ASPlayerInfoWrapper className="wrap-v2">
      <Portrait className="portrait">
        <div className="img_box">
          <span className="mask sprite_covor" />
          <img
            src={currentSongInfo.songInfo.imgUrl}
            alt={currentSongInfo.songInfo.name}
          />
        </div>
        <div className="generator">
          <i className="icon sprite_icon2" />
          <a href="/#" onClick={(e) => e.preventDefault()}>
            生成外链播放器
          </a>
        </div>
      </Portrait>
      <InfoContent isSpread={isSpread}>
        {renderInfo()}
        {renderOperations()}
        <div className="lyrics">
          {currentLyrics.slice(0, totalLyricCount).map((line, index) => (
            <p className="lyric-line" key={line.time + line.lyric}>
              {line.lyric}
            </p>
          ))}

          <button
            className="lyric-control"
            onClick={(e) => setIsSpread(!isSpread)}
          >
            {isSpread ? "收起" : "展开"}
            <i className="sprite_icon2"></i>
          </button>
        </div>
      </InfoContent>
    </ASPlayerInfoWrapper>
  );
};
export default memo(ASPlayerInfo);
