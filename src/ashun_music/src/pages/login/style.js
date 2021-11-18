import styled from "styled-components";

const login_bgImg = require("@/assets/images/login_bgImg.png").default;

export const LoginWrapper = styled.div`
  width: 100%;
  min-height: 800px;
  background: url(${login_bgImg}) no-repeat;
  background-size: cover;
  overflow: hidden;
  #loginBox {
    margin: 0 auto;
    margin-top: 200px;
    width: 45%;
    max-width: 500px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 0px 0px 2px white;
    transition: 0.5s;
    backdrop-filter: blur(3px);
    box-shadow: 0px 0px 30px white;
  }

  #loginBox > header {
    width: 200px;
    height: 170px;
    margin: 0 auto;
    margin-bottom: 70px;
    background-image: url("https://sf3-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/normal.0447fe9.png");
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    transform: translateY(-110%);
  }
  #loginBox:focus-within {
    box-shadow: 0px 0px 50px white;
    transform: translateY(-10px);
  }
  #loginBox:focus-within > header {
    background-image: url("https://sf3-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/blindfold.58ce423.png");
  }

  #loginBox form {
    margin: 20px 10px;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  strong {
    margin-top: 45px;
    font-size: 25px;
    color: white;
    text-shadow: 4px 4px 5px var(--color-light), 1px 1px 10px var(--color-deep),
      -1px -1px 10px var(--color-light), -4px -4px 5px var(--color-deep);

    letter-spacing: 10px;
  }
  .rows {
    flex: 1;
    padding: 5px;
  }
  .label {
    text-align: left;
    color: white;
    text-shadow: 2px 2px 3px var(--color-light), 1px 1px 5px var(--color-deep),
      -1px -1px 5px var(--color-light), -2px -2px 3px var(--color-deep);
  }
  .columns.input,
  input {
    min-width: 200px;
  }
  .columns.input {
    min-height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    background: white;
  }
  .columns.input::before {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    background: linear-gradient(
      to right,
      white,
      #f70938,
      #f70938,
      #ffff00,
      #33ff00,
      #00ccff,
      white
    );
    transform: translateX(-100%);
    transition: 0.8s;
  }
  .columns.input:hover::before {
    transform: translateX(0%);
  }
  .columns.input > input {
    height: 33px;
    outline: none;
    border: none;
    margin-left: 8px;
  }

  .btnBox {
    margin: 0 auto;
    position: relative;
    margin: 10px;
    width: 60px;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;

    button {
      padding: 10px 2px;
      width: 100%;
      height: 100%;
      color: white;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;

      background: linear-gradient(
        to right,
        var(--color-shallow),
        var(--color-near-white),
        var(--color-middle),
        var(--color-shallow)
      );
      background-size: 200% 100%;
      animation: btnAnimate 2s linear infinite;
    }

    @keyframes btnAnimate {
      100% {
        background-position: -200% 0;
      }
    }
  }
  .register {
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: #eee;
    cursor: pointer;

    &:hover {
      color: #fff;
      text-decoration: underline;
    }
  }
`;
