import { memo } from "react";

import ASTopBanner from "./child-pages/top-banner/index.js";
import ASHotRecommend from "./child-pages/hot-recommend";
import ASNewAlbum from "./child-pages/new-album";
import ASRankingList from "./child-pages/ranking-list";
import ASUserLogin from "./child-pages/user-login";
import ASSettleSinger from "./child-pages/settle-singer";
import ASHotRadio from "./child-pages/hot-radio";

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style.js";

const ASRecommend = function (props) {
  return (
    <RecommendWrapper id="recommend">
      <ASTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <ASHotRecommend />
          <ASNewAlbum />
          <ASRankingList />
        </RecommendLeft>
        <RecommendRight>
          <ASUserLogin />
          <ASSettleSinger />
          <ASHotRadio />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
};

export default memo(ASRecommend);
