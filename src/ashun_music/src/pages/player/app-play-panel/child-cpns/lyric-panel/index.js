import { memo, useEffect, useRef } from "react";
import { useSelector, shallowEqual } from "react-redux";
import classNames from "classnames";
import { LyricPanelWrapper } from "./style.js";

const ASLyricPanel = (props) => {
  //redux hooks

  const { currentLyrics, currentLyricIndex } = useSelector(
    (state) => ({
      currentLyrics: state.getIn(["player", "currentLyrics"]),
      currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
    }),
    shallowEqual
  );
  //其它hooks
  const lyricBoxRef = useRef();
  useEffect(() => {
    const difference =
      (currentLyricIndex - 1) * 44 - lyricBoxRef.current.scrollTop;
    // lyricBoxRef.current.scrollTop = difference + lyricBoxRef.current.scrollTop;
    lyricBoxRef.current.scrollTo({
      top: difference + lyricBoxRef.current.scrollTop,
      behavior: "smooth",
    });
  }, [currentLyricIndex]);
  //其他业务
  const isActive = (index) => {
    return index === currentLyricIndex;
  };

  //render 相关
  const { width = "100%", height = "100%" } = props;
  const propsStyle = {
    width,
    height,
  };
  return (
    <LyricPanelWrapper {...propsStyle}>
      <div className="lyric-box" ref={lyricBoxRef}>
        <h2>❤Ashuntefannao❤</h2>
        {currentLyrics.map((line, index) => (
          <p
            key={`${line.content}${line.time}`}
            className={classNames({ active: isActive(index) })}
          >
            {line.lyric}
          </p>
        ))}
        <h2>❤Ashuntefannao❤</h2>
      </div>
    </LyricPanelWrapper>
  );
};
export default memo(ASLyricPanel);
