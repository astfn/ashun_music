import { memo, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTopBannersAction } from "../../store/actionCreators.js";

import { Carousel } from "antd";
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl,
} from "./style.js";

function ASTopBanner(props) {
  /*state*/
  const [currentI, setCurrentI] = useState(0);
  /*redux相关*/
  const dispatch = useDispatch();
  const { topBanners } = useSelector((state) => ({
    topBanners: state.getIn(["recommend", "topBanners"]),
  }));
  /*其它hooks*/
  const bannerRef = useRef();
  useEffect(() => {
    dispatch(getTopBannersAction());
  }, [dispatch]);
  const bannerChange = useCallback((from, to) => {
    setCurrentI(to);
  }, []);

  /*其它业务*/
  //最开始topBanners为空，所以要进行判断
  const bgBlurImg =
    topBanners[currentI] &&
    topBanners[currentI].imageUrl + `?imageView&blur=40x20`;

  return (
    <BannerWrapper bgBlurImg={bgBlurImg}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay
            beforeChange={bannerChange}
            ref={bannerRef}
          >
            {topBanners.map((item) => (
              <div className="banner-item" key={item.targetId}>
                <img src={item.imageUrl} alt={item.typeTitle} />
              </div>
            ))}
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </BannerRight>
        <BannerControl>
          <div
            className="point prev_point"
            onClick={() => bannerRef.current.prev()}
          ></div>
          <div
            className="point next_point"
            onClick={() => bannerRef.current.next()}
          ></div>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
}
export default memo(ASTopBanner);
