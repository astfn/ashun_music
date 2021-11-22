import { memo, useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import { LoginWrapper } from "./style.js";

import { setFormState } from "@/utils/setFormState.js";
import { createUser } from "@/common/constants.js";
import { addUserAction } from "@/store/user/actionCreators.js";
import { useGetUserFromStore } from "@/common/hooks/store-related.js";

const ASLogin = (props) => {
  const [nickName, setNickName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const FormStates = [
    { name: "nickName", setState: setNickName },
    { name: "phone", setState: setPhone },
    { name: "password", setState: setPassword },
  ];

  /* redux hooks */
  const dispatch = useDispatch();
  const user = useGetUserFromStore().toJS();

  /* 其它hook */

  /* 其他业务 */
  const handelChangeForm = (e) => {
    setFormState(e.target.name, FormStates, e.target.value);
  };
  const handleRegister = () => {
    const isRepeatPhone = user.users.findIndex((v) => v.phone === phone);
    if (isRepeatPhone !== -1) {
      alert("该手机号已经被注册了哦！😀");
      return;
    }

    const newUser = createUser({ nickName, phone, password });
    dispatch(addUserAction(newUser));
    alert("注册成功，快去登陆吧！");
  };
  /* render相关 */
  const renderForm = () => {
    return (
      <form>
        <div className="rows">
          <div className="columns label">昵称</div>
          <div className="columns input">
            <input
              value={nickName}
              onChange={(e) => handelChangeForm(e)}
              type="text"
              name="nickName"
              placeholder="请输入昵称"
            />
          </div>
        </div>
        <div className="rows">
          <div className="columns label">手机号</div>
          <div className="columns input">
            <input
              value={phone}
              onChange={(e) => handelChangeForm(e)}
              type="text"
              name="phone"
              placeholder="请输入手机号"
            />
          </div>
        </div>
        <div className="rows">
          <div className="columns label">密码</div>
          <div className="columns input">
            <input
              value={password}
              onChange={(e) => handelChangeForm(e)}
              type="password"
              name="password"
              placeholder="请输入密码"
            />
          </div>
        </div>
        <div className="rows">
          <div className="btnBox">
            <button type="button" onClick={handleRegister}>
              注册
            </button>
          </div>
        </div>
      </form>
    );
  };
  return (
    <LoginWrapper>
      <div id="loginBox">
        <header></header>
        <strong>AshunMusic</strong>
        {renderForm()}
      </div>
    </LoginWrapper>
  );
};

export default withRouter(memo(ASLogin));
