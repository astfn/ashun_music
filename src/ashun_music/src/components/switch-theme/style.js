import styled from "styled-components";

export const SwitchThemeWrapper = styled.div``;

export const ThemeItem = styled.div`
  margin: 5px 5px 5px 0px;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  border: 2px solid #fff;
  background-color: ${(props) => props.color};

  cursor: pointer;
`;
