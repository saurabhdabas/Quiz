import React,{MouseEventHandler, useState} from 'react';
import { QuestionWrapper, ButtonWrapper } from './QuestionCard.styles'
import IQuestion from '../interfaces/IQuestion';
// export type AnswerObject = {
//   question: string
//   answer: string
//   correct: boolean
//   correctAnswer: string
// }
type Props = {
  questions: IQuestion[],
  question:string,
  questionNumber:number,
  setQuestion:React.Dispatch<React.SetStateAction<string>>
  answers:string[],
  setAnswers:React.Dispatch<React.SetStateAction<string[]>>
  // callback: (e: React.MouseEvent<HTMLButtonElement>) => void
  // userAnswer: AnswerObject | undefined
  // questionNr: number
  // totalQuestions: number
}


const QuestionCard: React.FC<Props> = ({questions,questionNumber, question, setQuestion, answers, setAnswers
}) => {
  console.log("questions:",questions);
  const [ selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionSelection = (event: React.MouseEvent<HTMLButtonElement>) : void =>{
    setSelectedOption(event.currentTarget.name)
  }

  return (
    <>
      <QuestionWrapper>
        {question}
      </QuestionWrapper>
      <ButtonWrapper
      >
        {answers.map((option)=>{
          return (
            <button name={option} onClick={handleOptionSelection}>{option}</button>
          );
        })}
      </ButtonWrapper>
    </>
  )
}

export default QuestionCard;