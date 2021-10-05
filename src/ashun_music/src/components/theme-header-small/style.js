import styled from "styled-components";

export const ThemeHeaderSmallWrapper = styled.div`
  height: 24px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  .left {
    .title {
      color: #333;
      font-weight: bold;
    }
  }
  .right {
    .more {
      color: #666;
    }
  }
`;
