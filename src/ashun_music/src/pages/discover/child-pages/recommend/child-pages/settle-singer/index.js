import { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { SettleSingerWrapper } from "./style.js";
import ASThemeHeaderSmall from "@/components/theme-header-small";
import { getSettleSingerListAction } from "../../store/actionCreators.js";

const ASSettleSinger = (props) => {
  const settleSingerList = useSelector(
    (state) => state.getIn(["recommend", "settleSingerList"]),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSettleSingerListAction());
  }, [dispatch]);

  const renderItems = () =>
    settleSingerList.map((item, index) => (
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
        </div>
      </a>
    ));
  const headerInfo = { title: "入驻歌手", moreText: `查看全部 >` };
  return (
    <SettleSingerWrapper>
      <ASThemeHeaderSmall {...headerInfo} />
      <div className="content">{renderItems()}</div>
      <div className="apply-for">
        <a href="./#" onClick={(e) => e.preventDefault()}>
          申请成为网易音乐人
        </a>
      </div>
    </SettleSingerWrapper>
  );
};
export default memo(ASSettleSinger);
