import { memo, useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Carousel } from "antd";
import AlbumsCover from "@/components/albums-cover";
import { getNewAlbumsAction } from "../../store/actionCreators.js";
import {
  NEW_ALBUMS_LIMIT,
  NEW_ALBUMS_PER_PAGE_NUM,
} from "@/common/constants.js";
import ASThemeHeaderRCM from "@/components/theme-header-rcm";
import { ASNewAlbumWrapper } from "./style.js";

const ASNewAlbum = function (props) {
  /*redux*/
  const { newAlbums = [] } = useSelector(
    (state) => ({ newAlbums: state.getIn(["recommend", "newAlbums"]) }),
    shallowEqual
  );
  //将newAlbums进行划分
  const showAlbums = [];
  while (newAlbums.length) {
    if (newAlbums.length >= NEW_ALBUMS_PER_PAGE_NUM) {
      showAlbums.push(newAlbums.splice(0, NEW_ALBUMS_PER_PAGE_NUM));
    } else {
      showAlbums.push(newAlbums.splice(0, newAlbums.length));
    }
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewAlbumsAction(NEW_ALBUMS_LIMIT));
  }, [dispatch]);
  /*其它hooks*/
  const carosuelRef = useRef();
  /*视图相关*/
  const headerContent = {
    title: "新碟上架",
    moreLink: "/discover/songs",
  };

  const width = 118;
  const imgSize = 100;
  const presetImg = { width, imgSize };
  const renderCardContent = (albums) => (
    <div className="cardContent">
      {albums.map((item, indey) => {
        const { name, picUrl, artist } = item;
        const itemInfo = {
          width: presetImg.width,
          imgSize: presetImg.imgSize,
          name,
          picUrl,
          artist,
        };
        return (
          <div className="item" key={item.id}>
            <AlbumsCover {...itemInfo} />
          </div>
        );
      })}
    </div>
  );
  const renderCarousel = () => (
    <div className="content">
      <Carousel dots={false} ref={carosuelRef}>
        {showAlbums.map((albums, index) => (
          <div key={albums[0].id} className="card">
            {renderCardContent(albums)}
          </div>
        ))}
      </Carousel>
      <div className="leftPoint " onClick={() => carosuelRef.current.prev()}>
        <i className="sprite_02"></i>
      </div>
      <div
        className="rightPoint sprite_02"
        onClick={() => carosuelRef.current.next()}
      >
        <i className="sprite_02"></i>
      </div>
    </div>
  );

  return (
    <ASNewAlbumWrapper {...presetImg}>
      <ASThemeHeaderRCM {...headerContent} />
      {renderCarousel()}
    </ASNewAlbumWrapper>
  );
};
export default memo(ASNewAlbum);
