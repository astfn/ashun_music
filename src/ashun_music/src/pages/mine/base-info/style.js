import styled from "styled-components";

export const BaseInfoWrapper = styled.div`
  display: flex;
  padding: 20px 25px;
  margin-bottom: 10px;
  background-color: #f7f7f7;
  .avatar {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    border-radius: 50%;
    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);

    .ant-avatar.ant-avatar-circle.ant-avatar-image {
      width: 100%;
      height: 100%;
    }
  }
  .info-box {
    width: 200px;
    font-size: 13px;
    padding: 10px 0px 0px 15px;
    /* color: #0c73c2; */
    color: var(--color-shallow);

    .prev-txt {
      color: #999;
      /* color: var(--color-shallow); */
    }

    .off-line {
      button {
        padding: 8px 25px;

        cursor: pointer;
        border-radius: 2px;
        text-align: center;
        color: var(--color-near-white);
        background-color: var(--color-middle);

        &:hover {
          color: #fff;
          background-color: var(--color-shallow);
        }
      }
    }
  }
`;
