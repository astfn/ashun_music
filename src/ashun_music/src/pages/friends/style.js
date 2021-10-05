import styled from "styled-components";

export const FriendsWrapper = styled.div``;

const logi_img = require("@/assets/images/friend_sprite.jpg").default;
export const FriendsContent = styled.div`
  min-height: 700px;

  border: 1px solid #d3d3d3;
  border-top: none;
  border-bottom: none;
  background-color: white;

  .img-box {
    position: relative;
    width: 902px;
    height: 484px;
    margin: 0 auto 0;
    padding-top: 70px;
    background: url(${logi_img}) no-repeat;
    background-position: 0 70px;
    .desc {
      font-size: 14px;
      padding: 178px 100px 0 535px;
      line-height: 23px;
    }
    .login {
      display: block;
      width: 157px;
      height: 48px;
      margin: 36px 0 0 535px;
      position: absolute;
      top: 295px;
      left: 0px;

      background: url(${logi_img}) no-repeat;
      background-position: 0 9999px;
      text-indent: -9999px;
      &:hover {
        background-position: 0 -432px;
      }
    }
  }
`;
