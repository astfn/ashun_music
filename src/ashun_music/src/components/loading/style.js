import styled from "styled-components";

export const LoadingWeapper = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .anticon-spin {
    position: relative;
    svg {
      width: 80px;
      height: 80px;
      color: red;
    }
  }
  .text-box {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);

    color: transparent;
    background-image: linear-gradient(to right, pink, #ff416c, #ff4b2b);
    background-size: 200% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    animation: color_animat linear 1.5s infinite;

    @keyframes color_animat {
      to {
        background-position: -200% 0;
      }
    }
  }
`;
