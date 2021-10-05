import styled from "styled-components";

export const UserLoginWrapper = styled.div`
  height: 126px;
  background-position: -2px 0;

  p {
    width: 205px;
    margin: 0 auto;
    padding: 16px 0;
    line-height: 22px;
    color: #666;
  }

  a {
    display: block;
    margin: 0 auto;
    width: 100px;
    height: 31px;
    line-height: 31px;
    color: #fff;
    text-align: center;
    text-decoration: none;
    text-shadow: 0 1px 0 #8a060b;
    background-position: 0 -195px;
    &:hover {
      background-position: -110px -195px;
    }
  }
`;
