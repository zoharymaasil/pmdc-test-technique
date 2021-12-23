import styled from "styled-components";
import { COLORS } from 'styled/theme';

export const ArticlePageWrapper = styled.div`
  text-align: center;

  h1 {
    margin-bottom: 0;
  }

  .p {
    &Description {
      text-align: left;
    }

    &Date {
      color: ${COLORS.greyText};
      font-style: italic;
      margin-top: 8px;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 90%;
  height: 350px;
  margin: 40px auto 65px;
  
  @media (min-width: 922px) {
    width: 720px;
  }

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