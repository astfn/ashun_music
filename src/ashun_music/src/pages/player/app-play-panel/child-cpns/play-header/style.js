import styled from "styled-components";
const bg_img = require("@/assets/images/playpanel_bg.png").default;

export const PlayHeaderWrapper = styled.div`
  width: 100%;
  height: 40px;
  background: url(${bg_img}) 0 0;
  display: flex; ;
`;
export const PlayHeaderLeft = styled.div`
  padding: 0px 20px;
  width: 555px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: yellowgreen; */
  .title-box {
    padding-left: 12px;
    font-size: 14px;
    font-weight: bold;
    color: #e2e2e2;
  }

  .operations {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #ccc;

    .line {
      height: 15px;
      border-left: 1px solid #000;
      border-right: 1px solid #2c2c2c;
      margin: 0px 8px;
    }
    .star-all,
    .clear {
      display: flex;
      align-items: center;
      cursor: pointer;
      .icon {
        margin-right: 6px;
        display: inline-block;
        width: 16px;
        height: 16px;
      }
      &:hover {
        color: #ccc;
        text-decoration: underline;
      }
    }
    .star-all {
      .icon {
        background-position: -24px 0;
      }
      &:hover {
        .icon {
          background-position: -24px -20px;
        }
      }
    }
    .clear {
      .icon {
        margin-right: 4px;
        background-position: -51px 0;
      }
      &:hover {
        .icon {
          background-position: -51px -20px;
        }
      }
    }
  }
`;
export const PlayHeaderRight = styled.div`
  position: relative;
  flex: 1;
  .name-box,
  .close-box {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .name-box {
    font-size: 14px;
    color: white;
  }
  .close-box {
    position: absolute;
    top: 6px;
    right: 8px;
    width: 30px;
    height: 30px;
    overflow: hidden;
    text-indent: -999px;
    cursor: pointer;
    background-position: -195px 9px;
    width: 30px;
    height: 30px;
    &:hover {
      background-position: -195px -22px;
    }
  }
  /* background-color: pink; */
`;
