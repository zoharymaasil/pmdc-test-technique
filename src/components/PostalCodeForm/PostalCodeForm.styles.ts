import styled from "styled-components";
import { COLORS } from 'styled/theme';

export const PostalCodeFormWrapper = styled.div`
  box-shadow: 0px 3px 6px #00000029;
  padding: 25px;
  border-radius: 8px;
  border: 1px solid ${COLORS.grey};
  max-width: 720px;
  margin: 50px auto;
  text-align: center;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${COLORS.primary};

  @media (min-width: 992px) {
    font-size: 28px;
  }
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: auto;
  margin: 0 auto 20px;
  
  @media (min-width: 320px) {
    width: 305px;
  }

  label {
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    height: 45px;
    border: 1px solid ${COLORS.primary};
    border-radius: 8px;
    padding: 10px;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  background-color: ${COLORS.danger};
  color: ${COLORS.light};
  border: 1px solid transparent;
  min-width: 150px;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;

  &:hover,
  &:focus {
    background-color: ${COLORS.light};
    color: ${COLORS.danger};
    border: 1px solid ${COLORS.danger};
  }
`;