import styled from "styled-components";

const bannerHeight = "270px";
export const BannerWrapper = styled.div`
  height: ${bannerHeight};
  background: url(${(props) => props.bgBlurImg}) center center/6000px;
  .banner {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: ${bannerHeight};
    position: relative;
  }
`;
export const BannerLeft = styled.div`
  width: 730px;
  .banner-item {
    & > img {
      width: 100%;
    }
  }
`;

export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank",
})`
  width: 250px;
  height: ${bannerHeight};
  position: relative;
  background: url(${require("@/assets/images/download.png").default});
  p {
    width: 100%;
    color: #8d8d8d;
    text-align: center;
    position: absolute;
    left: 0px;
    bottom: 5px;
    margin: 0px;
  }
`;

const prev_point = require("@/assets/images/banner-control-left.png").default;
const next_point = require("@/assets/images/banner-control-right.png").default;
export const BannerControl = styled.div`
  .point {
    width: 37px;
    height: 63px;
    cursor: pointer;
    position: absolute;
    top: 100px;
    background-color: yellowgreen;
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  .prev_point {
    left: -68px;
    background: url(${prev_point});
  }
  .next_point {
    right: -68px;
    background: url(${next_point});
  }
`;
