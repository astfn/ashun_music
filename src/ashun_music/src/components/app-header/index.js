import { memo, useState } from "react";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import StyledWrapper from "./style";
import { CaretRightOutlined } from "@ant-design/icons";
import { Popover, Avatar } from "antd";

import { headerLinks } from "@/common/local-data.js";
import {
  useGetUserFromStore,
  useInitialStoreUserFromLocalStorage,
  useUpdateLocalStorageUserfromStore,
  useSetCurrentThemeFromUser,
} from "@/common/hooks/store-related.js";

export default withRouter(
  memo(function ASAppHeader(props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    /* 其它 hooks */
    //header在最开始渲染，从localstorage中初始化user数据
    useInitialStoreUserFromLocalStorage();

    useUpdateLocalStorageUserfromStore();

    useSetCurrentThemeFromUser();

    /* redux hooks */
    const user = useGetUserFromStore().toJS();
    const { isLogin, currentUser } = user;

    /* 业务处理 */
    function jumpRouter(path, index) {
      props.history.replace(path);
      setCurrentIndex(index);
    }
    function jumpLogin() {
      props.history.replace("/login");
    }

    /* render 相关 */
    function renderHot(title) {
      return title === "下载客户端" ? (
        <div className="hot sprite_01"></div>
      ) : (
        false
      );
    }
    function renderLinks() {
      return headerLinks.map((link, index) => {
        if (index < 3) {
          return (
            <div
              key={link.path}
              className={classNames("link", { active: currentIndex === index })}
              onClick={(e) => jumpRouter(link.path, index)}
            >
              <p>{link.title}</p>
              {renderHot(link.title)}
              <CaretRightOutlined className="btm_Icon theme_transition" />
            </div>
          );
        } else {
          return (
            <a
              key={link.path}
              className={classNames("link", { active: currentIndex === index })}
              href={link.path}
              target="_blank"
              rel="noreferrer"
            >
              <p>{link.title}</p>
              {renderHot(link.title)}
              <CaretRightOutlined className="btm_Icon theme_transition" />
            </a>
          );
        }
      });
    }

    function isRenderProfile() {
      if (isLogin) {
        const content = (
          <div className="card-content">
            <div className="line">
              <span>账号:</span>
              <i>{currentUser.phone}</i>
            </div>
          </div>
        );
        return (
          <Popover
            className="card"
            placement="bottom"
            title={currentUser.nickName}
            content={content}
            trigger="hover"
          >
            <Avatar src="https://joeschmoe.io/api/v1/random" />
          </Popover>
        );
      }
      return <span>登录</span>;
    }

    /* 返回的JSX */
    return (
      <StyledWrapper id="app_header">
        <div className="content wrap-v1">
          <div className="left">
            <div
              className="logo sprite_01"
              onClick={() => {
                jumpRouter("/", 0);
              }}
            >
              首页
            </div>
            {renderLinks()}
          </div>

          <div className="right">
            <Input
              className="search"
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined />}
            />
            <div className="center">
              <span>创作者中心</span>
            </div>
            <div className="login" onClick={jumpLogin}>
              {isRenderProfile()}
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </StyledWrapper>
    );
  })
);
