import { useState } from "react";

import bgPatternDesktop from "./assets/bg-pattern-desktop.svg";
import illustrationWoman from "./assets/illustration-woman-online-desktop.svg";
import illustrationBox from "./assets/illustration-box-desktop.svg";
import { data } from "./data";
import { SingleQuestion } from "./components/SingleQuestion";

import * as S from "./StylesApp";

export const App = () => {
  const [questions, setQuestion] = useState(data);

  return (
    <S.Container>
      <S.Left>
        <img src={illustrationWoman} />
      </S.Left>
      <S.Right>
        <div className="wrapper">
          <h1>FAQ</h1>
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </div>
      </S.Right>
    </S.Container>
  );
};
