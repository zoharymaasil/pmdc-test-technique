import styled from "styled-components";
import { COLORS } from 'styled/theme';

export const ArticleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ArticleCard = styled.a`
  margin: 60px 0;
  padding: 0;
  
  @media (min-width: 768px) {
    width: calc(100% / 2);
    padding: 0 20px;
  }

  @media (min-width: 1200px) {
    width: calc(100% / 3);
    padding: 0 20px;
  }

`;

export const ArticleContent = styled.div`
  min-width: auto;
  min-height: 430px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0px 3px 6px #00000029;

  @media (min-width: 320px) {
    min-width: 320px;
  }

  .p {
    &Title {
      padding: 0 20px;
      font-size: 18;
      font-weight: 600;
    }

    &Description {
      padding: 0 20px 20px;
      margin: 0;
    }
  }
`;

export const CategoryLink = styled.a`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 30px 0;

  cursor: pointer;
`;

export const BadgeDate = styled.span`
  position: absolute;
  top: 15px;
  left: 15px;
  width: max-content;
  background-color: ${COLORS.primary};
  color: ${COLORS.light};
  padding: 8px 15px;
  border-radius: 8px;

  p {
    margin: 0;
    text-align: center;
    font-size: 14px;

    &.lblDate {
      font-size: 30px;
      font-wight: 600;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  
  span {
    width: 100% !important;
    height: inherit !important;
    position: relative !important;
  }

  .articleImg {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;  
  }
`;