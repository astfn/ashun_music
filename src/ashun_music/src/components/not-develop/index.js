import { memo } from "react";
import { NotDevelopWeapper } from "./style.js";
const ASNotDevelop = (props) => {
  return (
    <NotDevelopWeapper>
      <div className="text-box">
        <span>开发中🔨</span>
      </div>
    </NotDevelopWeapper>
  );
};
export default memo(ASNotDevelop);
