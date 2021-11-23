import { memo } from "react";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import { renderRoutes } from "react-router-config";
import { NavLink } from "react-router-dom";

import { DiscoverWrapper, TopWrapper, SwitchThemeWrapper } from "./style.js";
import { dicoverMenu } from "@/common/local-data.js";
import ASSwitchTheme from "@/components/switch-theme";

import { changeThemeAction } from "@/store/user/actionCreators.js";

export default withRouter(
  memo(function ASDiscover(props) {
    //redux hooks
    const dispatch = useDispatch();
    //handle Event
    const changeThemeCallback = (theme) => {
      dispatch(changeThemeAction(theme));
      console.log("handel 切换主题成功");
    };

    //render 相关
    function renderMenu() {
      return dicoverMenu.map((item, index) => (
        <NavLink to={item.path} key={item.title} className="item ">
          <li>
            <span className="theme_transition">{item.title}</span>
          </li>
        </NavLink>
      ));
    }
    //返回的JSX
    return (
      <DiscoverWrapper id="discover">
        <TopWrapper className="top theme_transition">
          <div className="top_menu wrap-v1">
            <ul className="menu_ul">{renderMenu()}</ul>
          </div>
        </TopWrapper>
        {renderRoutes(props.route.routes)}
        <SwitchThemeWrapper>
          <ASSwitchTheme callback={changeThemeCallback} />
        </SwitchThemeWrapper>
      </DiscoverWrapper>
    );
  })
);
