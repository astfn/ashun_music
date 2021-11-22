import styled from "styled-components";

export const MineWrapper = styled.div``;

const logi_img = require("@/assets/images/mine_sprite.png").default;
export const OffLineWrapper = styled.div`
  min-height: 700px;

  border: 1px solid #d3d3d3;
  border-top: none;
  border-bottom: none;
  background-color: white;

  .img-box {
    position: relative;
    width: 807px;
    height: 372px;
    margin: 0 auto 0;
    padding-top: 104px;
    background: url(${logi_img}) no-repeat 0 104px;

    .cover-title {
      position: absolute;
      top: calc(160px - 60px); //减去盒子高度
      right: 11px;

      width: 320px;
      height: 60px;
      display: flex;
      align-items: center;

      font-size: 35px;
      color: #555;
      background-color: #fff;
      user-select: none;
    }
    .login {
      display: block;
      width: 167px;
      height: 45px;
      margin: 10.5px 0 0 482px;
      position: absolute;
      top: 295px;
      left: 0px;

      background: url(${logi_img}) no-repeat;
      background-position: 0 9999px;
      text-indent: -9999px;
      &:hover {
        background-position: 0 bottom;
      }
    }
  }
`;

export const OnLineWrapper = styled.div`
  padding: 20px;
  border: 1px solid #d3d3d3;
  border-top: none;
  border-bottom: none;
  background-color: white;
`;

export const PlayListWrapper = styled.div`
  padding: 20px;
  background-color: var(--color-near-white);

  .paly-list-prev {
    margin: 0 auto;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 0px 0px 3px 2px var(--color-deep);
    overflow: hidden;

    .prev-header {
      margin-top: 13px;
      display: flex;
      font-size: 20px;
      color: var(--color-near-white);
      text-align: center;
      .left {
        width: ${(props) => props.width};
      }
      .right {
        flex: 1;
      }
    }
    .prev-content {
      padding: 20px 0px 10px 0px;
      display: flex;
    }
  }
`;
