import { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getRelevantSongListAction } from "../../store/actionCreators.js";
import { formatImgSize } from "@/utils/format-utils";

import { RelevantSongListWrapper } from "./style.js";
import ASThemeHeaderSmall from "@/components/theme-header-small";

const ASRelevantSongList = (props) => {
  /*  redux hook */
  const dispatch = useDispatch();
  const { currentSong, relevantSongList } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      relevantSongList: state.getIn(["player", "relevantSongList"]),
    }),
    shallowEqual
  );
  const { id } = currentSong;

  useEffect(() => {
    dispatch(getRelevantSongListAction(id));
  }, [dispatch, id]);

  return (
    <RelevantSongListWrapper>
      <ASThemeHeaderSmall title="包含这首歌的歌单" />
      <div className="content">
        {relevantSongList.map((item, index) => (
          <div key={item.id} className="item">
            <div className="img-box">
              <img
                src={formatImgSize(item.coverImgUrl, "50x50")}
                alt={item.name}
              />
              <a href="/#">{""}</a>
            </div>
            <div className="info">
              <a href="/#" className="text-nowrap">
                {item.name}
              </a>
              <div className="desc-box">
                <span className="preText">by</span>
                <span className="creator-name text-nowrap">
                  {item.creator.nickname}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </RelevantSongListWrapper>
  );
};

export default memo(ASRelevantSongList);
