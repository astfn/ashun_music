import styled from "styled-components";

export const MineWrapper = styled.div``;

const logi_img = require("@/assets/images/mine_sprite.png").default;
export const MineContent = styled.div`
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
