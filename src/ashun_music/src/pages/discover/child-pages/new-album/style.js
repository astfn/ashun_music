import styled from "styled-components";
export const ASNewAlbumWrapper = styled.div`
  border-left: 2px solid #e1e1e1;
  border-right: 1px solid #d3d3d3;
  background-color: #fff;
`;
export const ContentWrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  .item {
    width: ${(props) => props.width + "px"};
    margin: 0px 30px 30px 0px;
    &:last-of-type {
      margin-bottom: 30px;
    }
  }
`;
