import { memo } from "react";
import { useDispatch } from "react-redux";

import { TopRankingWrapper } from "./style.js";
import { getCurrentSongAction } from "@/pages/player/store/actionCreators.js";

const ASTopRanking = (props) => {
  const { name, coverImgUrl, tracks = [] } = props;

  const dispatch = useDispatch();
  const playSong = (id) => {
    dispatch(getCurrentSongAction(id));
  };
  return (
    <TopRankingWrapper>
      <div className="top">
        <div className="left">
          <img src={coverImgUrl} alt={name} />
          <a
            href="./#"
            className="mask image_cover"
            onClick={(e) => e.preventDefault()}
          >
            {""}
          </a>
        </div>
        <div className="right">
          <h3 className="title">{name}</h3>
          <div className="icons">
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>

      <div className="middle">
        {tracks.slice(0, 10).map((item, index) => (
          <div className="item" key={item.id}>
            <div className="rank">
              <span>{index + 1}</span>
            </div>
            <div className="info">
              <span className="link text-nowrap">{item.name}</span>
              <div className="operations">
                <button
                  className="btn sprite_02 play"
                  onClick={() => playSong(item.id)}
                ></button>
                <button className="btn sprite_icon2 addto"></button>
                <button className="btn sprite_02 favor"></button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bottom">
        <a href="./#" onClick={(e) => e.preventDefault()}>
          查看全部 &gt;
        </a>
      </div>
    </TopRankingWrapper>
  );
};

export default memo(ASTopRanking);
