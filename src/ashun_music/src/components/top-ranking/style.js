import styled from "styled-components";

export const TopRankingWrapper = styled.div`
  flex: 1;
  /* border: 2px solid; */
  .top {
    height: 100px;
    padding: 20px 0 0 20px;
    display: flex;

    .left {
      position: relative;
      width: 80px;
      height: 80px;
      img {
        width: 100%;
      }
      .mask {
        background-position: -145px -57px;
      }
    }

    .right {
      width: 116px;
      margin: 6px 0 0 10px;

      .title {
        font-weight: bold;
      }
      .icons {
        .btn {
          width: 22px;
          height: 22px;
          margin-right: 10px;
          cursor: pointer;
        }
        .play {
          background-position: -267px -205px;
          &:hover {
            background-position: -267px -235px;
          }
        }
        .favor {
          background-position: -300px -205px;
          &:hover {
            background-position: -300px -235px;
          }
        }
      }
    }
  }

  .middle {
    margin-top: 20px;
    height: 319px;
    .item {
      height: 32px;
      line-height: 32px;
      display: flex;
      .rank {
        width: 50px;
        position: relative;
        span {
          position: absolute;
          right: 0px;
          width: 35px;
          font-size: 16px;
          text-align: center;
        }
      }
      .info {
        flex: 1;
        width: 170px;
        display: flex;

        span {
          flex: 1;
          display: block;
        }
        .operations {
          display: none;
          width: 82px;
          margin-right: 10px;

          .btn {
            width: 17px;
            height: 17px;
            margin-left: 8px;
            cursor: pointer;
          }
          .play {
            background-position: -267px -268px;
            &:hover {
              background-position: -267px -288px;
            }
          }
          .addto {
            top: 2px;
            background-position: 0 -700px;
            &:hover {
              background-position: -22px -700px;
            }
            position: relative;
          }

          .favor {
            background-position: -297px -268px;
            &:hover {
              background-position: -297px -288px;
            }
          }
        }
        &:hover .operations {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
      }
    }
    .item:nth-of-type(-n + 3) > .rank {
      color: #c10d0c;
    }
  }
  .bottom {
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    a {
      color: black;
      margin-right: 30px;
    }
  }
`;
