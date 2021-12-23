import styled from "styled-components";
import { COLORS } from 'styled/theme';

export const HeaderWrapper = styled.header`
  background-color: ${COLORS.primary};
  color: ${COLORS.light};
  width: 100%;
  min-height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  .LinkHome {
    font-size: 19px;
    font-weight: 700;
    letter-spacing: .8px;
  }

  a {
    &:hover {
      color: ${COLORS.secondary};
    }
  }
`;

export const FooterWrapper = styled.footer`
  background-color: ${COLORS.primary};
  color: ${COLORS.light};
  width: 100%;
  min-height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;