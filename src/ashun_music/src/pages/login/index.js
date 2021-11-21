import { memo, useState } from "react";
import { withRouter } from "react-router";

import { LoginWrapper } from "./style.js";

import { setFormState } from "@/utils/setFormState.js";

const ASLogin = (props) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  /* redux hooks */

  /* 其它hook */

  /* 其他业务 */
  const FormStates = [
    { name: "phone", setState: setPhone },
    { name: "password", setState: setPassword },
  ];
  const handelChangeForm = (e) => {
    setFormState(e.target.name, FormStates, e.target.value);
  };

  const handleLogin = () => {
    console.log(phone, password);
  };
  /* render相关 */
  const renderForm = () => {
    return (
      <form>
        <div className="rows">
          <div className="columns label">手机号</div>
          <div className="columns input">
            <input
              value={phone}
              onChange={(e) => handelChangeForm(e)}
              name="phone"
              type="text"
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
              name="password"
              type="password"
              placeholder="请输入密码"
            />
          </div>
        </div>
        <div className="rows">
          <div className="btnBox">
            <button type="button" onClick={handleLogin}>
              登录
            </button>
          </div>
          <span
            className="register"
            onClick={() => {
              props.history.replace("/register");
            }}
          >
            注册
          </span>
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
