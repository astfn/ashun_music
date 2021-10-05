import { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import { changeSongPageIsMounted } from "./store/actionCreators.js";

import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style.js";
import ASPlayerInfo from "./child-pages/player-info";
import ASRelevantSongList from "./child-pages/relevant-song-list";
import ASSimilarSongs from "./child-pages/similar-songs";

const ASPlayer = (props) => {
  /*  redux hook */
  const dispatch = useDispatch();

  /* 其它hooks */
  useEffect(() => {
    dispatch(changeSongPageIsMounted(true));
    return () => {
      dispatch(changeSongPageIsMounted(false));
    };
  }, [dispatch]);

  return (
    <PlayerWrapper className="wrap-v2">
      <PlayerLeft>
        <ASPlayerInfo />
      </PlayerLeft>
      <PlayerRight>
        <ASRelevantSongList />
        <ASSimilarSongs />
      </PlayerRight>
    </PlayerWrapper>
  );
};
export default memo(ASPlayer);
