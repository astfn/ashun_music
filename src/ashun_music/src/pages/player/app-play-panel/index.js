import { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { AppPlayPanelWrapper } from "./style.js";
import ASPlayHeader from "./child-cpns/play-header";
import ASPlayList from "./child-cpns/play-list";
import ASLyricPanel from "./child-cpns/lyric-panel";

const ASAppPlayPanel = (props) => {
  //redux hook
  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
    }),
    shallowEqual
  );

  //render 相关
  const playListStyles = {
    width: "555px",
  };
  return (
    <AppPlayPanelWrapper>
      <ASPlayHeader />
      <div className="main">
        <img src={currentSong.al.picUrl + "?imageView&blur=10x10"} alt="" />
        <ASPlayList {...playListStyles} />
        <ASLyricPanel />
      </div>
    </AppPlayPanelWrapper>
  );
};
export default memo(ASAppPlayPanel);
