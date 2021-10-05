import styled from "styled-components";

export const ASSongsCoverWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .top {
    width: ${(props) => props.width + "px"};
    height: ${(props) => props.width + "px"};
    position: relative;
    background-color: slateblue;
    background: url(${(props) => props.picUrl}) no-repeat 0px 0px /
      ${(props) => props.width + "px"};

    .mask {
      display: block;
      width: 100%;
      height: 100%;
      background-position: 0 0;
    }
    .info {
      width: 100%;
      height: 27px;
      position: absolute;
      left: 0px;
      bottom: 0px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background-position: 0 -537px;
      padding: 0px 10px;
      color: #ccc;

      .headset {
        display: inline-block;
        margin-right: 5px;
        width: 14px;
        height: 11px;
        background-position: 0 -24px;
      }
      .play {
        width: 16px;
        height: 17px;
        background-position: 0 0;
        cursor: pointer;
        &:hover {
          background-position: 0 -60px;
        }
      }
    }
  }
  .bottom {
    flex: 1;
    font-size: 14px;
    .name {
      display: block;
      padding: 8px 0px 2px 0px;
    }
    .cover-source {
      font-size: 12px;
      .preText {
        color: #999;
      }
      .sourceText {
        color: #666;
      }
    }
  }
`;
