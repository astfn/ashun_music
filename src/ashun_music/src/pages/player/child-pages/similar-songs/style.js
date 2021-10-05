import styled from "styled-components";

export const ASSimilarSongsWrapper = styled.div`
  .content {
    margin: 20px 0px;
    .item {
      margin-bottom: 15px;
      display: flex;
      height: 32px;

      .info {
        width: 156px;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        .song-name {
          color: #333;
        }
        .artist-name {
          color: #999;
        }
      }
      .operations {
        padding: 0px 3px;
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        button {
          width: 10px;
          height: 11px;
          cursor: pointer;
          opacity: 0.9;
        }
        .play {
          background-position: -69px -455px;
        }
        .addto {
          background-position: -87px -454px;
        }
      }
    }
  }
`;
