import {
  createContext,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";

import { Slider, message } from "antd";
import { AppPlayerBarWrapper, Control, PlayInfo, Operation } from "./style.js";
import ASAppPlayPanel from "../app-play-panel";
import {
  getCurrentSongAction,
  changeSequence,
  changeCurrentSongByIndex,
  changeCurrentLyricIndex,
} from "../store/actionCreators.js";
import { formatImgSize, formatSongTime } from "@/utils/format-utils.js";
import { formatGetPlayerSongUrl } from "@/utils/format-utils.js";
import { defaultCurrentSong } from "@/common/local-data.js";

export const appPlayerBarCtx = createContext();
const ASAppPlayerBar = (props) => {
  const [currentTimeMS, setCurrentTimeMS] = useState(0);
  const [manualChange, setManualChange] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  /*  redux hook */
  const dispatch = useDispatch();

  const {
    currentSong,
    sequence,
    playList,
    currentLyrics,
    currentLyricIndex,
    songPageIsMounted,
  } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      sequence: state.getIn(["player", "sequence"]),
      playList: state.getIn(["player", "playList"]),
      currentLyrics: state.getIn(["player", "currentLyrics"]),
      currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
      songPageIsMounted: state.getIn(["player", "songPageIsMounted"]),
    }),
    shallowEqual
  );
  const { name, ar, al, dt, id } = currentSong;
  const arList = ar || [];
  const currentSongInfo = {
    songInfo: {
      name,
      id,
      imgUrl: al ? al.picUrl : "",
      duration: dt,
    },
    singerNames: arList.map((v) => v.name).join("/"),
  };

  /* 路由跳转 */
  const jumpDetailPage = useCallback(() => {
    props.history.replace(`/song?id=${currentSongInfo.songInfo.id}`);
  }, [props.history, currentSongInfo.songInfo.id]);

  /*  其它hooks */
  const audioRef = useRef();
  const sliderRef = useRef();

  //默认播放的歌曲
  useEffect(() => {
    dispatch(getCurrentSongAction(defaultCurrentSong.id));
  }, [dispatch]);

  //切换歌曲时，自动播放,进度条置为0
  useEffect(() => {
    audioRef.current.play().then(
      (res) => {
        setIsPlaying(true);
      },
      (err) => {
        setIsPlaying(false);
      }
    );
    setManualChange(false);
    songPageIsMounted && jumpDetailPage(); //若详情页已挂载，则重新跳转
  }, [currentSong, songPageIsMounted, jumpDetailPage]);

  /*  handle event */
  const togglePlaySong = useCallback(() => {
    setIsPlaying(!isPlaying);
    isPlaying
      ? audioRef.current.pause()
      : audioRef.current.play().catch((err) => {
          setIsPlaying(false);
        });
  }, [isPlaying]);

  //slide相关事件

  const slideOnChange = useCallback((value) => {
    setManualChange(true);
    setCurrentTimeMS(value);
    // console.log("slideOnChange");
  }, []);

  const slideOnAfterChange = useCallback(
    (value) => {
      setManualChange(false);
      audioRef.current.currentTime = Math.floor(value / 1000); //播放指定位置音频
      //如果当前未播放，则让其播放
      if (!isPlaying) {
        togglePlaySong();
      }
      sliderRef.current.blur(); //按钮失去焦点
      // console.log("slideOnAfterChange");
    },
    [isPlaying, togglePlaySong]
  );

  //audio时间更新时操作
  const musicTimeUpdate = () => {
    const nowTimeMS = Math.floor(audioRef.current.currentTime * 1000);
    !manualChange && setCurrentTimeMS(nowTimeMS); //若没有手动改变，则更新当前播放时间
    //匹配对应歌词
    let i = 0;
    let lrcTime = currentLyrics[i] && currentLyrics[i].time;
    while (lrcTime < currentTimeMS && i < currentLyrics.length) {
      i++;
      lrcTime = currentLyrics[i] && currentLyrics[i].time;
    }
    const findIndex = i === 0 ? 0 : i - 1;
    if (findIndex !== currentLyricIndex) {
      dispatch(changeCurrentLyricIndex(findIndex));
      //展示歌词
      const currentLyric = currentLyrics[findIndex];
      message.open({
        key: "lyric",
        duration: 0,
        content: currentLyric.lyric,
        className: "lyric-message",
      });
    }
  };

  //歌曲结束时操作
  const handleMusicEnded = () => {
    if (sequence === 2 || playList.length === 1) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changeCurrentSongByIndex(1));
    }
  };

  /* 其他业务  */

  const changeLoopMode = () => {
    dispatch(changeSequence(sequence >= 2 ? 0 : sequence + 1));
  };

  /* render相关 */
  const renderControl = function () {
    return (
      <Control isPlaying={isPlaying}>
        <button
          className="sprite_playbar btn prev"
          onClick={() => dispatch(changeCurrentSongByIndex(-1))}
        ></button>
        <button
          className="sprite_playbar btn play"
          onClick={togglePlaySong}
        ></button>
        <button
          className="sprite_playbar btn next"
          onClick={() => dispatch(changeCurrentSongByIndex(1))}
        ></button>
      </Control>
    );
  };

  const renderPlayInfo = function () {
    return (
      <PlayInfo>
        <div className="imageBox">
          <div className="mask sprite_playbar" onClick={jumpDetailPage} />
          <img
            src={formatImgSize(currentSongInfo.songInfo.imgUrl, "35x35")}
            alt=""
          />
        </div>
        <div className="songInfo">
          <div className="names text-nowrap">
            <span className="songName text-nowrap">{name}</span>
            <span className="singerName text-nowrap">
              {currentSongInfo.singerNames}
            </span>
          </div>
          <div className="progressInfo">
            <Slider
              ref={sliderRef}
              defaultValue={0}
              value={currentTimeMS}
              max={currentSongInfo.songInfo.duration}
              tooltipVisible={false}
              onChange={slideOnChange}
              onAfterChange={slideOnAfterChange}
            />
            <div className="timeInfo">
              <span className="now-time">{formatSongTime(currentTimeMS)}</span>
              <span className="line">/</span>
              <span className="total-time">
                {formatSongTime(currentSongInfo.songInfo.duration)}
              </span>
            </div>
          </div>
        </div>
      </PlayInfo>
    );
  };

  const renderOperation = function () {
    return (
      <Operation sequence={sequence}>
        <div className="left">
          {/* <button className="sprite_playbar btn smallWindow"></button> */}
          <button className="sprite_playbar btn star"></button>
          <button className="sprite_playbar btn share"></button>
        </div>
        <div className="right sprite_playbar">
          <button className="sprite_playbar btn volume"></button>
          <button
            className="sprite_playbar btn loopMode"
            onClick={changeLoopMode}
          ></button>
          <button
            className="sprite_playbar btn playerList"
            onClick={() => {
              setShowPanel(!showPanel);
              console.log("ss");
            }}
          >
            <span>{playList.length}</span>
          </button>
        </div>
      </Operation>
    );
  };

  return (
    <AppPlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        {renderControl()}
        {renderPlayInfo()}
        {renderOperation()}
        <audio
          ref={audioRef}
          src={formatGetPlayerSongUrl(currentSongInfo.songInfo.id)}
          onTimeUpdate={musicTimeUpdate}
          onEnded={handleMusicEnded}
        ></audio>
      </div>
      <appPlayerBarCtx.Provider value={{ setShowPanel }}>
        {showPanel && <ASAppPlayPanel />}
      </appPlayerBarCtx.Provider>
    </AppPlayerBarWrapper>
  );
};

export default memo(withRouter(ASAppPlayerBar));
