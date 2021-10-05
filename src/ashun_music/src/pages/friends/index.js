import { memo } from "react";
import { FriendsWrapper, FriendsContent } from "./style.js";

export default memo(function ASFriends(props) {
  console.log(props.route);
  return (
    <FriendsWrapper id="friends">
      <FriendsContent className="wrap-v2">
        <div className="img-box ">
          <p className="desc">
            你可以关注明星和好友品味他们的私房歌单
            通过他们的动态发现更多精彩音乐
          </p>
          <a className="login" href="/#">
            立即登录
          </a>
        </div>
      </FriendsContent>
    </FriendsWrapper>
  );
});
