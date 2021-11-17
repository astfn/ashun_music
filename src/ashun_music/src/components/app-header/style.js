import styled from "styled-components";
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
        background-position: 0px 0px;
        text-indent: -9999px;
      }
      .link {
        position: relative;
        text-align: center;
        font-size: 14px;
        line-height: 70px;
        p {
          color: #ccc;
          white-space: nowrap;
          padding: 0px 19px;
        }
      }
      .link.active,
      .link:hover {
        background: #000;
        p {
          color: white;
        }
      }
      .link.active > i.btm_Icon {
        display: block;
        position: absolute;
        left: 50%;
        top: 64px;
        width: 12px;
        height: 7px;
        margin-left: -6px;
        overflow: hidden;
        background-position: -226px 0;
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
        margin-top: -3px;
        width: 28px;
        color: #787878;
      }
    }
  }
  .divider {
    height: 5px;
    background-color: var(--color-shallow);
  }
`;
