import styled from "styled-components";

export const HotRadioWrapper = styled.div`
  padding: 15px;
  .content {
    .item {
      margin-top: 13px;
      display: flex;
      img {
        width: 40px;
        height: 40px;
      }
      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 12px;
        .name,
        .des {
          display: inline-block;
          margin-left: 8px;
          width: 160px;
        }
        .des .name {
        }
        .des {
          color: #666;
          /* margin-top: -6px; */
        }
      }
    }
  }
`;
