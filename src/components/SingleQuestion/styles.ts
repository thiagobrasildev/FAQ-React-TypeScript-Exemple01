import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #eee;
  padding: 10px 0px;
  gap: 10px;
`;

export const QuestionBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Question = styled.p`
  font-size: 16px;
  font-weight: bold;
  padding-right: 60px;
  text-align: justify;
`;

export const ButtonIcon = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const IconDown = styled.img``;

export const IconUp = styled.img`
  transform: rotate(-180deg);
`;

export const Awnser = styled.p`
  font-size: 12px;
  font-weight: 600;
  text-align: justify;
  color: #333;
  padding-right: 20px;
`;
