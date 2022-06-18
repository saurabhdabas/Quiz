import axios from 'axios';
import React, {useState,useEffect} from 'react';
import { MainWrapper } from './components/App.styles';

import MoneyGrid from './components/MoneyGrid';
import QuestionCard from './components/QuestionCard';
import IMoney from './interfaces/IMoney';
import IQuestion from './interfaces/IQuestion';
import { shuffleArray } from './utils/shuffleArray';

const App: React.FC= () => {

  const [ question , setQuestion] = useState<string>("");
  const [questions, setQuestions] = useState<IQuestion[]>([])
  const [ questionNumber, setQuestionNumber] = useState<number>(0);
  const [ answer, setAnswer] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [earned,setEarned] = useState<string>("$ 0");
  const [timer,setTimer] = useState<number>(30);
  
  
  const moneyGrid :IMoney[]= [
    { id: 1, amount: "$ 100" },
    { id: 2, amount: "$ 200" },
    { id: 3, amount: "$ 300" },
    { id: 4, amount: "$ 500" },
    { id: 5, amount: "$ 1,000" },
    { id: 6, amount: "$ 2,000" },
    { id: 7, amount: "$ 4,000" },
    { id: 8, amount: "$ 8,000" },
    { id: 9, amount: "$ 16,000" },
    { id: 10, amount: "$ 32,000" },
    { id: 11, amount: "$ 64,000" },
    { id: 12, amount: "$ 125,000" },
    { id: 13, amount: "$ 250,000" },
    { id: 14, amount: "$ 500,000" },
    { id: 15, amount: "$ 1,000,000" },
  ].reverse();

  useEffect(()=>{
    axios.get("http://localhost:8080/quiz")
    .then((response)=>{
      setQuestions(response.data)
      setQuestion(response.data[questionNumber].question)
      setAnswer(response.data[questionNumber].correctAnswer)
      setAnswers(shuffleArray(response.data[questionNumber].answers))
    })
  },[])
  
  let money = (moneyGrid.find((item)=>item.id === questionNumber-1))?.amount as string;
  
  useEffect(() => {
    if(questionNumber > 1){
      
      setEarned(money);
    }
  }, [questionNumber]);
  
  return (
    <MainWrapper>
      <div>{earned}</div>
      <QuestionCard timer={timer} setTimer={setTimer} questions ={questions} questionNumber={questionNumber} question={question} setQuestion={setQuestion} answer={answer} setAnswer={setAnswer} answers={answers} setAnswers={setAnswers} setQuestionNumber={setQuestionNumber}/>
      <MoneyGrid grid={moneyGrid} questionNumber={questionNumber}/>
    </MainWrapper>
  );
}

export default App;
