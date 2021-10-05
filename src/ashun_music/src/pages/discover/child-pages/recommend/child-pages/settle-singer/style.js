import styled from "styled-components";

export const SettleSingerWrapper = styled.div`
  padding: 15px;
  .content {
    .item {
      margin-top: 15px;
      display: flex;
      border: 1px solid #e9e9e9;
      background-color: #fafafa;
      text-decoration: none;
      &:hover {
        background-color: #f4f4f4;
      }
      img {
        width: 62px;
        height: 62px;
      }
      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .name,
        .des {
          margin-left: 13px;
        }
        .name {
          font-size: 14px;
          color: #333;
          font-weight: bold;
        }
        .des {
          font-size: 12px;
          color: #666;
          margin-top: -6px;
        }
      }
    }
  }
  .apply-for {
    margin-top: 20px;
    a {
      display: flex;
      height: 31px;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      text-decoration: none;
      border: 2px solid #d1d0d0;
      border-radius: 4px;
      background-image: linear-gradient(to bottom, #fefefe 20%, #f2f2f2);
      &:hover {
        border-color: #d9d8d8;
        background-image: linear-gradient(to bottom, #fff 50%, #f8f8f8);
      }
    }
  }
`;
