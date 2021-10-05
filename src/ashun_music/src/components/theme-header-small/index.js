import { memo } from "react";
import { ThemeHeaderSmallWrapper } from "./style.js";
const ASThemeHeaderSmall = (props) => {
  const { title, moreText } = props;
  return (
    <ThemeHeaderSmallWrapper>
      <div className="left">
        <span className="title">{title}</span>
      </div>
      <div className="right">
        <span className="more link">{moreText}</span>
      </div>
    </ThemeHeaderSmallWrapper>
  );
};
export default memo(ASThemeHeaderSmall);
