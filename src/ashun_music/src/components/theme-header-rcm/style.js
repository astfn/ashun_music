import styled from "styled-components";

export const ThemeHeaderRCMWrapper = styled.div`
  padding: 0 10px 0 0px;
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--color-middle);
  /* background-position: -225px -156px; */
  .left {
    height: 100%;
    display: flex;
    .circle {
      margin: -3px 10px 0px 10px;
      align-self: center;

      width: 15px;
      height: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: var(--color-shallow);

      &::before {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #fff;
      }
    }
    .title {
      font-size: 20px;
    }

    .linkList {
      margin: 7px 0 0 20px;
      height: 100%;
      .item {
        float: left;
        .link {
          color: #666;
        }
        .line {
          padding: 0px 12px;
          color: #ccc;
        }
      }
    }
  }
  .right {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .anticon.anticon-caret-right {
      padding: 0px 3px;
      color: var(--color-deep);
    }
  }
`;
