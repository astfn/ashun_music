import styled from "styled-components";

export const NotDevelopWeapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .text-box {
    text-align: center;
    padding: 8px 50px;
    font-size: 24px;
    box-shadow: 8px 8px #bbb, -8px -8px #ccc, 0px 0px 0px 3px #aaa;

    span {
      position: relative;
      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        bottom: 0px;
        right: 0px;

        width: 5px;
        height: 5px;
        border-radius: 50%;
        animation: load_animation 2s infinite ease-in-out;
      }
      @keyframes load_animation {
        from {
          box-shadow: 8px 0px black;
        }
        25% {
          box-shadow: 8px 0px black, 16px 0px black;
        }
        50% {
          box-shadow: 8px 0px black, 16px 0px black, 24px 0px black;
        }
      }
    }
  }
`;
