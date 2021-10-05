import styled from "styled-components";

export const RelevantSongListWrapper = styled.div`
  .content {
    margin: 20px 0px;

    .item {
      margin-bottom: 15px;
      display: flex;

      .img-box {
        min-width: 50px;
        min-height: 50px;
        position: relative;
        overflow: hidden;
        border-radius: 3px;
        a {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }
      }

      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 3px 0px 3px 10px;
        a {
          display: inline-block;
          max-width: 135px;
          font-size: 14px;
          color: black;
        }
        .desc-box {
          display: flex;
          align-items: flex-end;
          font-size: 12px;
          .preText {
            color: #999;
          }
          .creator-name {
            display: inline-block;
            max-width: 100px;
            margin: 0 2px 0 4px;
            color: #666;
          }
        }
      }
    }
  }
`;
