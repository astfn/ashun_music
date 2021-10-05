import { memo } from "react";
import { MineWrapper, MineContent } from "./style.js";

export default memo(function ASDiscover() {
  return (
    <MineWrapper id="friends">
      <MineContent className="wrap-v2">
        <div className="img-box ">
          <a className="login" href="/#">
            立即登录
          </a>
        </div>
      </MineContent>
    </MineWrapper>
  );
});
