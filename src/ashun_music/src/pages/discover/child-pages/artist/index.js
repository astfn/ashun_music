import { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { ArtistWrapper, ContentWrapper } from "./style.js";
import ASThemeHeaderSmall from "@/components/theme-header-small";
import ASLoading from "@/components/loading";

import { getSettleSingerListAction } from "./store/actionCreators.js";

const ASArtist = (props) => {
  const { settleSingerList = [] } = useSelector(
    (state) => ({
      settleSingerList: state.getIn(["artist", "settleSingerList"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSettleSingerListAction(100));
  }, [dispatch]);

  const renderItems = () => {
    if (settleSingerList.length === 0) {
      return <ASLoading />;
    }
    return settleSingerList.map((item, index) => (
      <a
        href="./#"
        className="item"
        key={item.id}
        onClick={(e) => e.preventDefault()}
      >
        <img src={item.img1v1Url} alt={item.name} />
        <div className="info">
          <span className="name text-nowrap">{item.name}</span>
          <span className="des text-nowrap">
            {item.alias.length ? item.alias.join("/") : "Ashuntefannao😀"}
          </span>
          <div className="musics-size">
            <span>
              专辑总数:<i>{item.albumSize}</i>
            </span>
            <span>
              歌曲发行总数:<i>{item.musicSize}</i>
            </span>
          </div>
        </div>
      </a>
    ));
  };

  const headerInfo = { title: "入驻歌手", moreText: `查看全部 >` };
  return (
    <ArtistWrapper className="wrap-v1">
      <ASThemeHeaderSmall {...headerInfo} />
      <ContentWrapper>{renderItems()}</ContentWrapper>
    </ArtistWrapper>
  );
};
export default memo(ASArtist);
