import { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import AlbumsCover from "@/components/albums-cover";
import { getNewAlbumsAction } from "./store/actionCreators.js";

import { ASNewAlbumWrapper, ContentWrapper } from "./style.js";
import ASLoading from "@/components/loading";

const ASNewAlbum = (props) => {
  /*redux*/
  const { newAlbums = [] } = useSelector(
    (state) => ({ newAlbums: state.getIn(["newAlbum", "newAlbums"]) }),
    shallowEqual
  );
  //将newAlbums进行划分

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewAlbumsAction(100));
  }, [dispatch]);
  /*其它hooks*/
  /*视图相关*/

  const width = 118;
  const imgSize = 100;
  const presetImg = { width, imgSize };

  const renderContent = (albums) => {
    if (newAlbums.length === 0) {
      return <ASLoading />;
    }
    return (
      <ContentWrapper>
        {newAlbums.map((item, indey) => {
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
      </ContentWrapper>
    );
  };

  return (
    <ASNewAlbumWrapper className="wrap-v1" {...presetImg}>
      {renderContent()}
    </ASNewAlbumWrapper>
  );
};

export default memo(ASNewAlbum);
