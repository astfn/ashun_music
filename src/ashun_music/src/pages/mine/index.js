import { memo } from "react";
import { withRouter } from "react-router";

import { MineWrapper, OffLineWrapper } from "./style.js";

const ASDiscover = (props) => {
  /* handleEvent */
  const jumpLogin = (e) => {
    e.preventDefault();
    props.history.replace("/login");
  };

  return (
    <MineWrapper id="friends">
      <OffLineWrapper className="wrap-v2">
        <div className="img-box ">
          <div className="cover-title">登录阿顺音乐</div>
          <a className="login" href="/#" onClick={jumpLogin}>
            立即登录
          </a>
        </div>
      </OffLineWrapper>
    </MineWrapper>
  );
};

export default withRouter(memo(ASDiscover));
