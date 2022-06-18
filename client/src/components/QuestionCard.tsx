import React,{useState,useEffect} from 'react';
import { QuestionWrapper, ButtonWrapper, QuestionCardWrapper } from './QuestionCard.styles'
import IQuestion from '../interfaces/IQuestion';
import { TimerDesign } from './timer.styles';
import {shuffleArray} from '../utils/shuffleArray';

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

  const [time, setTimedOut] = useState(true);
  const [className, setClassName] = useState("");

  useEffect(()=>{
    setTimeout(()=>{
      setQuestionNumber(1);
    },500)
    
    if(questions.length){
      
      if(selectedOption === answer && time){
        setTimeout(() => {
          setQuestionNumber((prev)=>prev+1);
        },3000);
        setClassName("correct");
        setTimer(30);
        setTimeout(()=>{
          setAnswer(questions[questionNumber].correctAnswer);
          setQuestion(questions[questionNumber].question);
          setAnswers(shuffleArray(questions[questionNumber].answers));
        },3000)
      } else {
        setClassName("wrong");
        
        setTimer(0);
        setTimedOut(false);
      }
    }
  },[selectedOption])

  useEffect(() => {
    const interval = setInterval(() => {
      if(timer === 0) setTimedOut(false);
      if(timer > 0){
        setTimer((prev) => prev - 1);
      }
      }, 1000)
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <QuestionCardWrapper>
      <TimerDesign>{timer}</TimerDesign>
      <QuestionWrapper>
        {question}
      </QuestionWrapper>
      <ButtonWrapper
      >
        {answers.map((option)=>{
          return (
            <button className={ selectedOption === option ? className : ""} name={option} onClick={handleOptionSelection}>
              {option}
            </button>
          );
        })}
      </ButtonWrapper>
    </QuestionCardWrapper>
  )
}

export default QuestionCard;