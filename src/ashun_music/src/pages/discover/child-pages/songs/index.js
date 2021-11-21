import { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import ASSongsCover from "@/components/songs-cover";
import { SongsWrapper, ContentWrapper } from "./style.js";
import ASLoading from "@/components/loading";

import { getHotRecommendsAction } from "./store/actionCreators.js";

const ASSongs = (props) => {
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(["songs", "hotRecommends"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotRecommendsAction(100));
  }, [dispatch]);

  /* redner 相关 */
  const width = 140;
  const imgSize = 140;
  const presetImg = { width, imgSize };

  const renderSongs = () => {
    if (hotRecommends.length === 0) {
      return <ASLoading />;
    }
    return hotRecommends.map((item, index) => {
      const { name, playCount, picUrl, copywriter, creator } = item;
      const info = {
        width: presetImg.width,
        imgSize: presetImg.imgSize,
        name,
        playCount,
        picUrl,
        copywriter,
        creator,
      };
      return (
        <div className="songs" key={item.id}>
          <ASSongsCover {...info} />
        </div>
      );
    });
  };
  return (
    <SongsWrapper className="wrap-v1">
      <ContentWrapper {...presetImg}>{renderSongs()}</ContentWrapper>
    </SongsWrapper>
  );
};

export default memo(ASSongs);
