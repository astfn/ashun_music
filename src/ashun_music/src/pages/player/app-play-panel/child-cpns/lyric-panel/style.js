import styled from "styled-components";

export const LyricPanelWrapper = styled.div`
  position: relative;
  flex: 1;
  margin-right: 4px;

  h2 {
    text-align: center;
  }
  .lyric-box {
    padding: 20px 0px;
    width: 100;
    height: 260px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 7px;
      background-color: #131414;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #484849;
      border: 2px solid #5d5e5f;
      border-radius: 8px;
    }

    p {
      height: 32px;
      min-height: 32px;
      text-align: center;
      line-height: 32px;
      word-wrap: break-word;
      color: #989898;
      &.active {
        font-size: 14px;
        color: #fff;
      }
    }
  }
`;
