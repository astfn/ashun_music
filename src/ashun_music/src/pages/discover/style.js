import styled from "styled-components";
export const DiscoverWrapper = styled.div``;
export const TopWrapper = styled.div`
  margin-top: -5px;
  width: 100%;
  height: 34px;
  background-color: #c20c0c;

  .top_menu {
    height: 100%;
    display: flex;
    padding-left: 180px;

    .menu_ul {
      /* margin-left: 120px; */
      width: 500px;
      height: 100%;
      display: flex;
      .item {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        text-decoration: none;
        span {
          padding: 3px 13px;
          border-radius: 20px;
        }
        &.active span,
        &:hover span {
          background-color: #9b0909;
        }
      }
    }
  }
`;
