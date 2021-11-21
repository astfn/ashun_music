import { memo, useEffect } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";

import { getTopListAction } from "../recommend/store/actionCreators.js";
// import ASThemeHeaderRCM from "@/components/theme-header-rcm";
import { RankingWrapper, ContentWrapper } from "./style.js";
import TopRanking from "@/components/top-ranking";

const ASRanking = (props) => {
  // const headerContent = {
  //   title: "榜单",
  //   moreLink: "/discover/songs",
  // };
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
    <RankingWrapper className="wrap-v1">
      {/* <ASThemeHeaderRCM {...headerContent} /> */}
      <ContentWrapper>
        <TopRanking {...topUpList} nums={100} />
        <TopRanking {...topNewList} nums={100} />
        <TopRanking {...topOriginList} nums={100} />
      </ContentWrapper>
    </RankingWrapper>
  );
};

export default memo(ASRanking);
