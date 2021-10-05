import { memo } from "react";
import StyledWrapper from "./style";

import { footerTexts, footerImages } from "@/common/local-data.js";

export default memo(function ASAppFooter() {
  return (
    <StyledWrapper id="app_footer">
      <div className="content wrap-v2">
        <div className="left">
          <div className="servers">
            {footerTexts.servers.map((item, index, arr) => {
              return (
                <div key={item.title}>
                  <a href={item.link}>{item.title}</a>
                  {index !== arr.length - 1 && <span className="line ">|</span>}
                </div>
              );
            })}
          </div>
          <div className="copyright">
            <span>{footerTexts.copyright[0]}</span>
            <span>{footerTexts.copyright[1]}</span>
          </div>
          <div className="report">
            <span>{footerTexts.report[0]}</span>
            <span>{footerTexts.report[1]}</span>
          </div>
          <div className="archives">
            <span>{footerTexts.archives[0]}</span>
            <span>{footerTexts.archives[1]}</span>
          </div>
        </div>
        <div className="right">
          {footerImages.map((item, index) => {
            return (
              <div className="item" key={item.link}>
                <a
                  className="link"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {""}
                </a>
                <span className="title"></span>
              </div>
            );
          })}
        </div>
      </div>
    </StyledWrapper>
  );
});
