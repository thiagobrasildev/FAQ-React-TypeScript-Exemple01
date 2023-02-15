import * as S from "./styles";
import iconArrow from "../../assets/icon-arrow-down.svg";
import { useState } from "react";

type Props = {
  question: string;
  awnser: string;
};

export const SingleQuestion = ({ question, awnser }: Props) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  return (
    <S.Container>
      <S.QuestionBox>
        <S.Question>{question}</S.Question>
        <S.ButtonIcon onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? (
            <S.IconUp src={iconArrow} />
          ) : (
            <S.IconDown src={iconArrow} />
          )}
        </S.ButtonIcon>
      </S.QuestionBox>
      {showInfo && <S.Awnser>{awnser}</S.Awnser>}
    </S.Container>
  );
};
