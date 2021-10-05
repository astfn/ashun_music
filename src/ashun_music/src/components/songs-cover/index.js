import { memo } from "react";

import { formatNumber, formatImgSize } from "@/utils/format-utils.js";
import { ASSongsCoverWrapper } from "./style.js";

const ASSongsCover = function (props) {
  const {
    width = 140,
    imgSize = 140,
    name,
    playCount,
    picUrl,
    copywriter,
    creator,
  } = props;
  function renderSourceText() {
    const nickname = creator ? creator.nickname : null;
    return <span className="sourceText">{copywriter || nickname}</span>;
  }
  return (
    <ASSongsCoverWrapper
      picUrl={formatImgSize(picUrl, `${imgSize}x${imgSize}`)}
      width={width}
    >
      <div className="top">
        <a className="mask sprite_covor" href="/#">
          {""}
        </a>
        <div className="info sprite_covor">
          <span>
            <i className="sprite_icon headset"></i>
            {formatNumber(playCount)}
          </span>
          <i className="sprite_icon play"></i>
        </div>
      </div>
      <div className="bottom">
        <span className="name">{name}</span>
        <div className="cover-source">
          <span className="preText"> by </span>
          {renderSourceText()}
        </div>
      </div>
    </ASSongsCoverWrapper>
  );
};

export default memo(ASSongsCover);
