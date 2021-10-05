import styled from "styled-components";

export const HotRecommendWrapper = styled.div`
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    .songs {
      width: ${(props) => props.width + "px"};
      margin-top: 30px;
      &:last-of-type {
        margin-bottom: 30px;
      }
    }
  }
`;
