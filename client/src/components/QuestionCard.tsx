import React,{useState,useEffect} from 'react';
import { QuestionWrapper, ButtonWrapper } from './QuestionCard.styles'
import IQuestion from '../interfaces/IQuestion';

type Props = {
  questions: IQuestion[],
  question:string,
  questionNumber:number,
  setQuestionNumber:React.Dispatch<React.SetStateAction<number>>,
  setQuestion:React.Dispatch<React.SetStateAction<string>>,
  answer:string,
  answers:string[],
  setAnswer:React.Dispatch<React.SetStateAction<string>>,
  setAnswers:React.Dispatch<React.SetStateAction<string[]>>
}


const QuestionCard: React.FC<Props> = ({questions,questionNumber, question, setQuestion, answer,answers,setAnswer, setAnswers,setQuestionNumber
}) => {
  console.log("questions:",questions);
  const [ selectedOption, setSelectedOption] = useState<string>("");
  const handleOptionSelection = (event: React.MouseEvent<HTMLButtonElement>) : void =>{
    setSelectedOption(event.currentTarget.name)
  }

  // useEffect(()=>{
  //   if(timer > 0){
  //     setTimeout(()=>{
  //       setTimer(timer - 1);
  //     },1000)
  //   }
  //   console.log("timer:",timer)
  // },[timer])

  useEffect(()=>{
    setQuestionNumber((prev)=>prev+1);
    if(questions.length){
      if(selectedOption === answer){
        setAnswer(questions[questionNumber].correct_answer)
        setQuestion(questions[questionNumber].question);
        setAnswers(questions[questionNumber].answers);
      }
    }
  },[selectedOption])

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