import { memo } from "react";
import { SwitchThemeWrapper, ThemeItem } from "./style.js";
import { AppThemes } from "@/common/local-data.js";
import { switchTheme } from "@/utils/switchTheme.js";

const ASSwitchTheme = (props) => {
  const { callback } = props;

  return (
    <SwitchThemeWrapper>
      {Object.entries(AppThemes).map(([name, themeData]) => {
        const color = themeData["--color-middle"];
        return (
          <ThemeItem
            key={name}
            color={color}
            onClick={() => {
              switchTheme(themeData);
              callback(themeData);
            }}
          />
        );
      })}
    </SwitchThemeWrapper>
  );
};

export default memo(ASSwitchTheme);
