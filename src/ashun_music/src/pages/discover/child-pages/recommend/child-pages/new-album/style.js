import styled from "styled-components";

export const ASNewAlbumWrapper = styled.div`
  width: 100%;
  .content {
    width: 100%;
    height: 180px;
    margin: 20px auto;
    border: 1px solid #d3d3d3;
    position: relative;
    background: #f5f5f5;

    .card {
      width: 100%;
      height: 180px;
      /* background-color: skyblue; */
    }
    .ant-carousel {
      margin: 0px 18px;
    }
    .cardContent {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      .item {
        margin-top: 30px;
        width: ${(props) => props.width + "px"};
        &:first-of-type {
          margin-left: 10px;
        }
      }
    }
  }
  .leftPoint,
  .rightPoint {
    position: absolute;
    top: 0px;
    bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      width: 17px;
      height: 17px;
      margin-top: -25px;
    }
  }
  .leftPoint {
    left: 0px;
    cursor: pointer;
    i {
      margin-left: 5px;
      background-position: -260px -75px;
    }
  }
  .rightPoint {
    right: 0px;
    cursor: pointer;
    i {
      margin-right: 5px;
      background-position: -300px -75px;
    }
  }
`;
