import styled from "styled-components";

export const ThemeHeaderRCMWrapper = styled.div`
  padding: 0 10px 0 34px;
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #c10d0c;
  background-position: -225px -156px;
  .left {
    height: 100%;
    display: flex;
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
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`;
