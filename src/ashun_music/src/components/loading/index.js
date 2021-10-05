import { memo } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { LoadingWeapper } from "./style.js";
const ASLoading = (props) => {
  return (
    <LoadingWeapper>
      <LoadingOutlined />
      <div className="text-box">Loading</div>
    </LoadingWeapper>
  );
};
export default memo(ASLoading);
