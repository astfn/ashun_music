import styled from "styled-components";

const ashun_logo = require("@/assets/images/ashun_logo.png").default;

export default styled.div`
  width: 100%;
  height: 75px;
  background-color: #242424;

  .content {
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > .left {
      width: 684px;
      height: 100%;
      display: flex;
      .logo {
        width: 178px;
        height: 100%;
        /* background-position: 0px 0px; */
        text-indent: -9999px;
        cursor: pointer;

        margin-left: -10px;
        margin-right: 10px;
        background: url(${ashun_logo}) no-repeat 0 17px / contain;
      }
      .link {
        position: relative;
        text-align: center;
        font-size: 14px;
        line-height: 70px;
        cursor: pointer;
        user-select: none;
        p {
          color: #ccc;
          white-space: nowrap;
          padding: 0px 19px;
        }
        .anticon.anticon-caret-right {
          opacity: 0;
          position: absolute;
          left: 50%;
          top: 61px;
          margin-left: -6px;
        }
      }
      .link.active,
      .link:hover {
        background: #000;
        p {
          color: white;
        }
      }
      .link.active > .btm_Icon {
        &.anticon.anticon-caret-right {
          opacity: 1;
          display: block;
          position: absolute;
          left: 50%;
          top: 61px;
          margin-left: -6px;
          transform: rotate(-90deg);
          overflow: hidden;
          color: var(--color-shallow);
        }
      }

      a.link {
        text-decoration: none;
      }
      .hot {
        position: absolute;
        top: 21px;
        left: 100px;
        width: 28px;
        height: 19px;
        background-position: -190px 0;
      }
    }

    & > .right {
      width: 350px;
      padding-right: 20px;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .search {
        width: 158px;
        height: 32px;
        font-size: 18px;
        border-radius: 32px;
        input::placeholder {
          font-size: 12px;
        }
      }

      .center {
        width: 90px;
        height: 32px;
        box-sizing: border-box;
        border: 1px solid #4f4f4f;
        line-height: 33px;
        text-align: center;
        color: #ccc;
        border-radius: 20px;
        &:hover {
          color: white;
          border-color: white;
        }
      }
      .login {
        margin-top: -2px;
        width: 28px;
        color: #787878;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          font-weight: bold;
          color: var(--color-light);
        }
      }
    }
  }
  .divider {
    height: 5px;
    background-color: var(--color-shallow);
  }
`;
