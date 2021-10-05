import styled from "styled-components";

const bg_img = require("@/assets/images/playpanel_bg.png").default;
export const AppPlayPanelWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 47px;
  width: 986px;
  height: 301px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  .main {
    flex: 1;
    display: flex;
    background: url(${bg_img}) -1014px 0 repeat-y;

    position: relative;
    overflow: hidden;
    img {
      position: absolute;
      left: 2px;
      top: -360px;
      width: 980px;
      height: auto;
      opacity: 0.2;
    }
  }
`;
