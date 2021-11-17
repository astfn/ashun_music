import { memo } from "react";

import { formatImgSize } from "@/utils/format-utils.js";
import { ASAlbumsCoverWrapper } from "./style.js";

const ASAlbumsCover = function (props) {
  const {
    width = 118,
    imgSize = 100,
    bgP = "0 -570px",
    name,
    picUrl,
    artist,
  } = props;
  return (
    <ASAlbumsCoverWrapper width={width} imgSize={imgSize} bgP={bgP}>
      <div className="top">
        <img src={formatImgSize(picUrl, `${imgSize}x${imgSize}`)} alt={name} />
        <a
          className="mask image_cover"
          href="/#"
          onClick={(e) => e.preventDefault()}
        >
          {""}
        </a>
      </div>
      <div className="bottom">
        <span className="albumName text-nowrap">{name}</span>
        <div className="artist">
          <span className="name text-nowrap">{artist.name}</span>
        </div>
      </div>
    </ASAlbumsCoverWrapper>
  );
};

export default memo(ASAlbumsCover);
