import { memo } from "react";
import { HotRadioWrapper } from "./style.js";
import ASThemeHeaderSmall from "@/components/theme-header-small";
import { hotRadioList } from "@/common/local-data.js";

const ASHotRadio = (props) => {
  const headerInfo = { title: "热门主播" };
  return (
    <HotRadioWrapper>
      <ASThemeHeaderSmall {...headerInfo} />
      <div className="content">
        {hotRadioList.map((item, index) => (
          <div href="/#" className="item" key={item.id}>
            <img src={item.picUrl} alt={item.name} />
            <div className="info">
              <span className="name text-nowrap link">{item.name}</span>
              <span className="des text-nowrap">{item.position}</span>
            </div>
          </div>
        ))}
      </div>
    </HotRadioWrapper>
  );
};
export default memo(ASHotRadio);
