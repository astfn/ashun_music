import { memo, useContext } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { PlayHeaderWrapper, PlayHeaderLeft, PlayHeaderRight } from "./style.js";
import { appPlayerBarCtx } from "../../../app-player-bar";
// import { clearPlayList } from "../../../store/actionCreators.js";

const ASPlayHeader = (props) => {
  //redux hooks
  // const dispatch = useDispatch();
  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
    }),
    shallowEqual
  );
  const { name } = currentSong;

  //handle event
  const handleClear = () => {
    // dispatch(clearPlayList());
  };

  //其它hooks
  const { setShowPanel } = useContext(appPlayerBarCtx);

  return (
    <PlayHeaderWrapper>
      <PlayHeaderLeft>
        <div className="title-box">
          <span>播放列表({999})</span>
        </div>
        <div className="operations">
          <div className="star-all">
            <i className="icon sprite_playlist" />
            <span className="text">收藏全部</span>
          </div>
          <span className="line" />
          <div className="clear" onClick={handleClear}>
            <i className="icon sprite_playlist" />
            <span className="text">清除</span>
          </div>
        </div>
      </PlayHeaderLeft>
      <PlayHeaderRight>
        <div className="name-box">{name}</div>
        <div
          className="close-box sprite_playlist"
          onClick={() => setShowPanel(false)}
        >
          关闭
        </div>
      </PlayHeaderRight>
    </PlayHeaderWrapper>
  );
};
export default memo(ASPlayHeader);
