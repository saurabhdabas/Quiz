import React,{useState,useEffect} from 'react';
import { QuestionWrapper, ButtonWrapper } from './QuestionCard.styles'
import IQuestion from '../interfaces/IQuestion';
import { TimerDesign } from './timer.styles';

type Props = {
  timer:number,
  setTimer:React.Dispatch<React.SetStateAction<number>>,
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


const QuestionCard: React.FC<Props> = ({timer,setTimer,questions,questionNumber, question, setQuestion, answer,answers,setAnswer, setAnswers,setQuestionNumber
}) => {
  const [ selectedOption, setSelectedOption] = useState<string>("");
  const handleOptionSelection = (event: React.MouseEvent<HTMLButtonElement>) : void =>{
    setSelectedOption(event.currentTarget.name)
  }
  console.log("answer:",answer);

  useEffect(()=>{
    if(questions.length){
      setQuestionNumber((prev)=>prev+1);
      if(selectedOption === answer){
        setTimer(30);
        setAnswer(questions[questionNumber].correct_answer)
        setQuestion(questions[questionNumber].question);
        setAnswers(questions[questionNumber].answers);
      }
    }
  },[selectedOption])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);


  return (
    <>
      <TimerDesign>{timer}</TimerDesign>
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