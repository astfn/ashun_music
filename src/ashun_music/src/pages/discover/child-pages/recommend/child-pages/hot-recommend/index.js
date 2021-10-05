import { memo, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import ASThemeHeaderRCM from "@/components/theme-header-rcm";
import ASSongsCover from "@/components/songs-cover";
import { HotRecommendWrapper } from "./style.js";
import { getHotRecommendsAction } from "../../store/actionCreators.js";
import { HOT_RECOMMEND_LIMIT } from "@/common/constants.js";

const ASHotRecommend = function (props) {
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotRecommendsAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);

  const history = useHistory();
  const jumpRouter = useCallback(
    (keyword) => {
      history.push({ pathname: "/discover/songs", cat: keyword });
    },
    [history]
  );
  const headerContent = {
    title: "热门推荐",
    linkList: ["华语", "流行", "摇滚", "民谣", "电子"],
    moreLink: "/discover/songs",
    jumpRouter,
  };
  const width = 140;
  const imgSize = 140;
  const presetImg = { width, imgSize };
  return (
    <HotRecommendWrapper {...presetImg}>
      <ASThemeHeaderRCM {...headerContent} />
      <div className="content">
        {hotRecommends.map((item, index) => {
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
        })}
      </div>
    </HotRecommendWrapper>
  );
};
export default memo(ASHotRecommend);
