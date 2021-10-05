import styled from "styled-components";

const sprite_footer_01 =
  require("@/assets/images/sprite_footer_01.png").default;
const sprite_footer_02 =
  require("@/assets/images/sprite_footer_02.png").default;

export default styled.div`
  width: 100%;
  height: 172px;
  border-top: 1px solid #d3d3d3;
  .content {
    height: 115px;
    padding-top: 13px;
    font-size: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .left {
    line-height: 24px;
    color: #666;
    .servers {
      display: flex;
      flex-direction: row;
      a,
      .line {
        color: #999;
      }
      .line {
        margin: 0px 8px 0px 10px;
      }
    }
    .copyright > span:nth-of-type(2n-1),
    .report > span:nth-of-type(2n-1),
    .archives > span:nth-of-type(2n-1) {
      margin-right: 16px;
    }
  }

  .right {
    display: flex;
    justify-content: space-around;
    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 18px 40px 0px 0px;

      .link {
        display: block;
        width: 50px;
        height: 45px;
        background-image: url(${sprite_footer_02});
        background-size: 110px 450px;
      }

      :nth-child(1) .link {
        background-position: -60px -101px;
      }
      :nth-child(2) .link {
        background-position: 0 0;
      }
      :nth-child(3) .link {
        background-position: -60px -50px;
      }
      :nth-child(4) .link {
        background-position: 0 -101px;
      }

      .title {
        margin-top: 5px;
        display: block;
        width: 52px;
        height: 10px;
        background-image: url(${sprite_footer_01});
        background-size: 180px 100px;
      }

      :nth-child(1) .title {
        background-position: -1px -90px;
      }
      :nth-child(2) .title {
        background-position: 0 0;
        margin-top: 7px;
      }
      :nth-child(3) .title {
        background-position: 0 -54px;
        margin-top: 6px;
      }

      :nth-child(4) .title {
        background-position: -1px -72px;
        margin-top: 6px;
      }
    }
  }
`;
