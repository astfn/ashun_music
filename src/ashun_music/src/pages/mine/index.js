import { memo } from "react";
import { withRouter } from "react-router";

import {
  MineWrapper,
  OffLineWrapper,
  OnLineWrapper,
  PlayListWrapper,
} from "./style.js";
import ASBaseInfo from "./base-info";
import ASThemeHeaderRCM from "@/components/theme-header-rcm";
import ASPlayList from "@/pages/player/app-play-panel/child-cpns/play-list";
import ASLyricPanel from "@/pages/player/app-play-panel/child-cpns/lyric-panel";

import { useGetUserFromStore } from "@/common/hooks/store-related.js";

const ASDiscover = (props) => {
  /* redux hooks */
  const user = useGetUserFromStore().toJS();
  const { isLogin } = user;

  /* handleEvent */
  const jumpLogin = (e) => {
    e.preventDefault();
    props.history.replace("/login");
  };

  /* render相关 */

  //离线状态
  const renderOffLineJSX = () => {
    return (
      <OffLineWrapper className="wrap-v2">
        <div className="img-box ">
          <div className="cover-title">登录阿顺音乐</div>
          <a className="login" href="/#" onClick={jumpLogin}>
            立即登录
          </a>
        </div>
      </OffLineWrapper>
    );
  };

  //在线状态
  //render 相关
  const playListStyles = {
    width: "600px",
  };
  const lyricPanelStyles = {
    height: "500px",
  };
  const rednerOnLineJSX = () => {
    return (
      <OnLineWrapper className="wrap-v2">
        <ASBaseInfo />
        <ASThemeHeaderRCM title="我的歌单" />
        <PlayListWrapper {...playListStyles}>
          <div className="paly-list-prev">
            <div className="prev-header">
              <div className="left">歌曲列表</div>
              <div className="right">歌词栏</div>
            </div>
            <div className="prev-content">
              <ASPlayList {...playListStyles} />
              <ASLyricPanel {...lyricPanelStyles} />
            </div>
          </div>
        </PlayListWrapper>
      </OnLineWrapper>
    );
  };

  //鉴权渲染
  const authentication = () => {
    return isLogin ? rednerOnLineJSX() : renderOffLineJSX();
  };
  //最后返回的JSX
  return <MineWrapper id="friends">{authentication()}</MineWrapper>;
};

export default withRouter(memo(ASDiscover));
