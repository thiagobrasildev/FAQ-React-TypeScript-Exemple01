import styled from "styled-components";
import bgPatternDesktop from "./assets/bg-pattern-desktop.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  width: 800px;
  min-height: 80%;
  overflow: hidden;
  padding: 30px;
  gap: 50px;
  -webkit-box-shadow: 0px 14px 11px 0px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: 0px 14px 11px 0px rgba(0, 0, 0, 0.21);
  box-shadow: 0px 14px 11px 0px rgba(0, 0, 0, 0.21);

  @media (max-width: 800px) {
    flex-direction: column;
    width: auto;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  .wrapper {
    display: flex;
    flex-direction: column;
  }

  h1 {
    padding-bottom: 20px;
    font-size: 30px;

    @media (max-width: 800px) {
      text-align: center;
    }
  }
`;
