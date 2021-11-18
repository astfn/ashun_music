import { memo } from "react";
import PropTypes from "prop-types";

import { ThemeHeaderRCMWrapper } from "./style.js";
import { CaretRightOutlined } from "@ant-design/icons";

const ASThemeHeaderRCM = function (props) {
  const { title, linkList, moreLink, jumpRouter } = props;
  return (
    <ThemeHeaderRCMWrapper className="sprite_02">
      <div className="left">
        <div className="circle theme_transition" />
        <h2 className="title">{title}</h2>
        <ul className="linkList">
          {linkList.map((item, index) => (
            <li className="item" key={item}>
              <span className="link" onClick={() => jumpRouter(item)}>
                {item}
              </span>
              <span className="line">|</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="right">
        <a href={moreLink} onClick={(e) => e.preventDefault()}>
          更多
        </a>
        <CaretRightOutlined />
      </div>
    </ThemeHeaderRCMWrapper>
  );
};
ASThemeHeaderRCM.propTypes = {
  title: PropTypes.string,
  linkList: PropTypes.array,
};
ASThemeHeaderRCM.defaultProps = {
  linkList: [],
};
export default memo(ASThemeHeaderRCM);
