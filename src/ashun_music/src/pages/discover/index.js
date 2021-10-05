import { memo } from "react";
import { withRouter } from "react-router";

import { DiscoverWrapper, TopWrapper } from "./style.js";
import { dicoverMenu } from "@/common/local-data.js";
import { renderRoutes } from "react-router-config";
import { NavLink } from "react-router-dom";
export default withRouter(
  memo(function ASDiscover(props) {
    //页面展示
    function renderMenu() {
      return dicoverMenu.map((item, index) => (
        <NavLink to={item.path} key={item.title} className="item">
          <li>
            <span>{item.title}</span>
          </li>
        </NavLink>
      ));
    }
    //返回的JSX
    return (
      <DiscoverWrapper id="discover">
        <TopWrapper className="top">
          <div className="top_menu wrap-v1">
            <ul className="menu_ul">{renderMenu()}</ul>
          </div>
        </TopWrapper>
        {renderRoutes(props.route.routes)}
      </DiscoverWrapper>
    );
  })
);
