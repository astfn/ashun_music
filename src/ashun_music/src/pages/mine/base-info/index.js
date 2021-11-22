import { memo } from "react";
import { useDispatch } from "react-redux";

import { BaseInfoWrapper } from "./style.js";
import { Avatar } from "antd";

import { useGetUserFromStore } from "@/common/hooks/store-related.js";
import {
  signOutAction,
  toggleIsLoginAction,
} from "@/store/user/actionCreators.js";

const ASBaseInfo = (props) => {
  /* redux hooks */
  const dispatch = useDispatch();
  const user = useGetUserFromStore().toJS();

  const { phone, nickName } = user.currentUser;

  /* handel events */
  const offLineHandel = () => {
    const isConfirm = window.confirm("您确认要退出账号吗？");
    if (isConfirm) {
      dispatch(signOutAction());
      dispatch(toggleIsLoginAction(false));
    }
  };
  /* render 相关 */
  return (
    <BaseInfoWrapper>
      <div className="avatar">
        <Avatar src="https://joeschmoe.io/api/v1/random" />
      </div>
      <div className="info-box">
        <p className="nickName">
          <span className="prev-txt">昵称：</span>
          {nickName}
        </p>
        <p className="phone">
          <span className="prev-txt">手机号：</span>
          {phone}
        </p>
        <div className="off-line">
          <button onClick={offLineHandel}>退出登录</button>
        </div>
      </div>
    </BaseInfoWrapper>
  );
};

export default memo(ASBaseInfo);
