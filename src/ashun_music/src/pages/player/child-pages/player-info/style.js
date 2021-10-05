import styled from "styled-components";

export const ASPlayerInfoWrapper = styled.div`
  padding-top: 35px;
  width: 709px;
  display: flex;
  justify-content: center;
`;
export const Portrait = styled.div`
  margin-right: 20px;

  .img_box {
    width: 206px;
    height: 205px;
    position: relative;
    img {
      width: 130px;
      height: 130px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .mask {
      display: block;
      position: absolute;
      top: 0px;
      left: 0px;
      bottom: 0px;
      right: 0px;
      z-index: 99;
      background-position: -140px -580px;
    }
  }

  .generator {
    margin: 10px 0px 0px -16px;
    text-align: center;
    .icon {
      position: relative;
      top: 3px;
      display: inline-block;
      width: 16px;
      height: 16px;
      background-position: -34px -863px;
    }
    a {
      color: #0c73c2;
      text-decoration: underline;
    }
  }
`;
export const InfoContent = styled.div`
  width: 414px;

  .info {
    .name_box {
      display: flex;
      .icon {
        margin-top: 6px;
        width: 54px;
        height: 24px;
        background-position: 0 -463px;
      }
      span {
        flex: 1;
        margin-left: 10px;
        font-size: 24px;
        color: #333;
      }
    }
    .desc {
      p {
        margin: 10px 0px;
        font-size: 12px;
        color: #999;
      }
      a {
        color: #0c73c2;
      }
    }
  }

  .operations {
    margin-bottom: 25px;
    /* margin-right: -30px; */
    display: flex;
    align-items: center;
    .prominentBTN {
      margin-right: 5px;
      button {
        color: #fff;
        height: 31px;
        text-align: center;
        cursor: pointer;
      }
      .play {
        width: 70px;
        text-indent: 23px;

        background-position: 0 -633px;
        &:hover {
          background-position: 0 -805px;
        }
      }
      .addto {
        text-indent: 999px;
        width: 31px;
        margin-left: -3px;
        background-position: 0 -1588px;
        &:hover {
          background-position: -80px -1588px;
        }
      }
    }
    .otherBTN {
      button {
        margin-right: 5px;
        height: 31px;
        line-height: 31px;
        color: #333;
      }
      .right_bg {
        padding: 0 7px 0 28px;
        display: inline-block;
        height: 100%;
        background-position: right -1020px;
      }
      .star {
        background-position: 0 -977px;
      }
      .share {
        background-position: 0 -1225px;
      }
      .down {
        background-position: 0 -2761px;
      }
      .comment_sum {
        background-position: 0 -1465px;
      }
    }
  }
  .lyrics {
    .lyric-control {
      position: relative;
      color: #0c73c2;
      background-color: #fff;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }

      i {
        position: absolute;
        width: 11px;
        height: 8px;
        right: -13px;
        top: 3px;
        background-position: ${(props) => (props.isSpread ? "-45px" : "-65px")} -520px;
      }
    }
  }
`;
