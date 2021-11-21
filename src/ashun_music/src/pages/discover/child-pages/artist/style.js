import styled from "styled-components";
export const ArtistWrapper = styled.div`
  padding: 20px;

  border-left: 2px solid #e1e1e1;
  border-right: 1px solid #d3d3d3;
  background-color: #fff;
`;

export const ContentWrapper = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .item {
    margin: 15px;
    padding: 10px 0px 5px;
    width: 150px;
    height: 180px;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
    border: 1px solid #e9e9e9;
    background-color: #fafafa;
    text-decoration: none;
    transition: 0.4s;
    &:hover {
      transform: scale(1.2);
      background-color: #f4f4f4;
      box-shadow: 0px 0px 3px 5px var(--color-near-white);
    }
    img {
      width: 62px;
      height: 62px;
      border-radius: 3px;
      box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.2);
    }
    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

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

      .musics-size {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
