import styled from "styled-components";
const progress_bar_img = require("@/assets/images/progress_bar.png").default;
const progress_bar_icon = require("@/assets/images/sprite_icon.png").default;

export const AppPlayerBarWrapper = styled.div`
  padding-top: 12px;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 53px;
  background-position: 0 0;
  background-repeat: repeat;
  .content {
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
  }
`;

export const Control = styled.div`
  margin-right: 30px;
  width: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .btn {
    width: 28px;
    height: 28px;
  }
  .prev {
    background-position: 0 -130px;
    &:hover {
      background-position: -30px -130px;
    }
  }
  .play {
    width: 36px;
    height: 36px;
    background-position: ${(props) =>
      props.isPlaying ? "0 -165px" : "0 -204px"};
    &:hover {
      background-position: ${(props) =>
        props.isPlaying ? "-40px -165px" : "-40px -204px"};
    }
  }
  .next {
    background-position: -80px -130px;
    &:hover {
      background-position: -110px -130px;
    }
  }
`;

export const PlayInfo = styled.div`
  display: flex;

  .imageBox {
    width: 34px;
    height: 35px;
    position: relative;
    cursor: pointer;
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-position: 0 -80px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }

  .songInfo {
    flex: 1;
    .names {
      font-size: 12px;
      .songName {
        display: inline-block;
        max-width: 300px;
        margin: 0px 15px 0px 13px;
        color: #fff;
      }
      .singerName {
        display: inline-block;
        max-width: 220px;
        color: #9b9b9b;
      }
    }
    .progressInfo {
      display: flex;
      align-items: flex-start;
      .ant-slider {
        width: 466px;
        margin: -3px 13px 0px;
        .ant-slider-rail {
          height: 9px;
          background: url(${progress_bar_img}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          /* background: url(${progress_bar_img}) left -66px; */
          border-radius: 5px;
          background-color: var(--color-near-white);
        }

        .ant-slider-handle {
          /* width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${progress_bar_icon}) 0 -250px; */
          margin-top: -3.5px;
          background-color: var(--color-shallow);
          border-color: #fff;
        }
      }
      .timeInfo {
        margin-top: -5px;
        flex: 1;
        font-size: 12px;
        .now-time {
          color: #a1a1a1;
        }
        .line,
        .total-time {
          color: #797979;
        }
        .line {
          padding: 0px 3px;
        }
      }
    }
  }
`;
export const Operation = styled.div`
  display: flex;
  .left,
  .right {
    margin-top: 3px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
  .btn {
    width: 25px;
    height: 25px;
    &:nth-of-type(n + 2) {
      margin-left: 3px;
    }
  }

  .left {
    margin-left: 25px;
    .star {
      background-position: -88px -163px;
      &:hover {
        background-position: -88px -189px;
      }
    }
    .share {
      background-position: -114px -163px;
      &:hover {
        background-position: -114px -189px;
      }
    }
  }
  .right {
    margin-left: 5px;
    padding-left: 13px;
    background-position: -147px -248px;

    .volume {
      background-position: -2px -248px;
      &:hover {
        background-position: -31px -248px;
      }
    }
    .loopMode {
      background-position: ${(props) => {
        switch (props.sequence) {
          case 0: {
            return "-3px -344px";
          }
          case 1: {
            return "-66px -248px";
          }
          case 2: {
            return "-66px -344px";
          }
          default: {
            return "-3px -344px";
          }
        }
      }};
      &:hover {
        background-position: ${(props) => {
          switch (props.sequence) {
            case 0: {
              return "-33px -344px";
            }
            case 1: {
              return "-93px -248px";
            }
            case 2: {
              return "-93px -344px";
            }
            default: {
              return "-33px -344px";
            }
          }
        }};
      }
    }
    .playerList {
      padding-left: 15px;
      width: 59px;
      background-position: -42px -68px;
      text-align: center;
      color: #ccc;
      &:hover {
        background-position: -42px -98px;
      }
    }
  }
`;
