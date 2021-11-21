import styled from "styled-components";

export const ASAlbumsCoverWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .top {
    width: ${(props) => props.width + "px"};
    height: ${(props) => props.imgSize + "px"};
    position: relative;

    img {
      width: ${(props) => props.imgSize + "px"};
      height: ${(props) => props.imgSize + "px"};
    }

    .mask {
      background-position: ${(props) => props.bgP};
    }
  }
  .bottom {
    flex: 1;
    font-size: 12px;
    .albumName {
      display: block;
      padding: 5px 0px 0px 0px;
      width: 100px;
    }

    .artist {
      .name {
        color: #666;
      }
    }
  }
`;
