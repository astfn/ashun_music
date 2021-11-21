import styled from "styled-components";

export const PlayListWrapper = styled.div`
  position: relative;
  padding: 0px 10px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  .content {
    width: 100%;
    height: 260px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 7px;
      background-color: #131414;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #484849;
      border: 2px solid #5d5e5f;
      border-radius: 8px;
    }
    .item {
      width: 100%;
      min-height: 28px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      cursor: pointer;

      &:hover,
      &.active-song {
        color: white;
        background-color: rgba(0, 0, 0, 0.3);
        .song-name,
        .artist-name,
        .song-duration {
          color: #fff;
        }
      }
      .play {
        margin: 0px 10px;
        width: 10px;
        height: 13px;
        &.active {
          background-position: -182px 0;
        }
      }
      .song-name {
        width: 266px;
        color: #ccc;
      }
      .artist-name {
        margin-left: 20px;
        width: 166px;
        color: #9b9b9b;
      }
      .song-duration {
        text-align: center;
        width: 45px;
        color: #666;
      }
      .album-link {
        margin: 0px 10px 0px 6px;
        width: 14px;
        height: 16px;
        background-position: -80px 0px;
      }
    }
  }
`;
