import styled from "styled-components";

export const DiscoverWrapper = styled.div`
  position: relative;
`;

export const TopWrapper = styled.div`
  margin-top: -5px;
  width: 100%;
  height: 34px;
  background-color: var(--color-shallow);

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
          background-color: var(--color-deep);
        }
      }
    }
  }
`;

export const SwitchThemeWrapper = styled.div`
  position: fixed;
  top: 200px;
  left: 0px;
  width: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.3);
  -webkit-clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
`;
