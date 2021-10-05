import { memo, useEffect } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";

import { getTopListAction } from "../../store/actionCreators.js";
import ASThemeHeaderRCM from "@/components/theme-header-rcm";
import { RankingListWrapper } from "./style.js";
import TopRanking from "@/components/top-ranking";

const ASRankingList = function (props) {
  const headerContent = {
    title: "榜单",
    moreLink: "/discover/songs",
  };
  const { topUpList, topNewList, topOriginList } = useSelector(
    (state) => ({
      topUpList: state.getIn(["recommend", "topUpList"]),
      topNewList: state.getIn(["recommend", "topNewList"]),
      topOriginList: state.getIn(["recommend", "topOriginList"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);
  return (
    <RankingListWrapper>
      <ASThemeHeaderRCM {...headerContent} />
      <div className="content">
        <TopRanking {...topUpList} />
        <TopRanking {...topNewList} />
        <TopRanking {...topOriginList} />
      </div>
    </RankingListWrapper>
  );
};
export default memo(ASRankingList);
