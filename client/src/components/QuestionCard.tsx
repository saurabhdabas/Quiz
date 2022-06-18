import React,{useState,useEffect} from 'react';
import useSound from 'use-sound';
import { QuestionWrapper, ButtonWrapper, QuestionCardWrapper } from './QuestionCard.styles'
import { StartBtnWrapper } from './StartBtnWrapper.styles';
import IQuestion from '../interfaces/IQuestion';

import { TimerDesign } from './timer.styles';
import {shuffleArray} from '../utils/shuffleArray';

const timersound = require('../sounds/timersound.mp3');

type Props = {
  start:boolean,
  setStart:React.Dispatch<React.SetStateAction<boolean>>,
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

const QuestionCard: React.FC<Props> = ({start,setStart,timer,setTimer,questions,questionNumber, question, setQuestion, answer,answers,setAnswer, setAnswers,setQuestionNumber
}) => {
  const [ selectedOption, setSelectedOption] = useState<string>("");
  const handleOptionSelection = (event: React.MouseEvent<HTMLButtonElement>) : void =>{
    setSelectedOption(event.currentTarget.name)
  }

  const [time, setTimedOut] = useState<boolean>(true);
  
  const [className, setClassName] = useState<string>("");
  const [play, { stop }] = useSound<any>(timersound);
  
  const handleStart = (event: React.MouseEvent<HTMLButtonElement>) : void => {
    setStart(true);
  }


  useEffect(()=>{

    if(questions.length){
      stop();
      if(selectedOption === answer && time){
        setClassName("correct");
        
        setTimeout(()=>{
          setTimer(30);
          setQuestionNumber((prev)=>prev+1);
          setAnswer(questions[questionNumber].correctAnswer);
          setQuestion(questions[questionNumber].question);
          setAnswers(shuffleArray(questions[questionNumber].answers));
          play();
        },3000)
      } 
      else {

        setClassName("wrong");
        setTimer(0);
        setTimeout(()=>{
          stop();
          setTimedOut(false);
        },3000)
      }
    }
  },[selectedOption])

  useEffect(() => {
    console.log("start:",start);
    if(start){
      
      const interval = setInterval(() => {
      
        if(timer === 0) setTimedOut(false);
        if(timer > 0){
          
          setTimer((prev) => prev - 1);
        }
        }, 1000)
      return () => clearInterval(interval);
    }
  }, [timer,start]);

  return (
    <QuestionCardWrapper>
      <StartBtnWrapper>
        <button onClick={handleStart}>Start</button>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',backgroundImage:"url('./clock.png')",width:"100px",height:"102px",backgroundSize: "97px 99px",backgroundRepeat:"no-repeat"}}>
          <TimerDesign>{timer}</TimerDesign>
        </div>
      </StartBtnWrapper>

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