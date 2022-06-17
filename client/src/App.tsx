import axios from 'axios';
import React, {useState,useEffect} from 'react';
import QuestionCard from './components/QuestionCard';
import IQuestion from './interfaces/IQuestion';


const App: React.FC= () => {

  const [ question , setQuestion] = useState<string>("");
  const [questions, setQuestions] = useState<IQuestion[]>([])
  const [ questionNumber, setQuestionNumber] = useState<number>(0);
  const [ answer, setAnswer] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([]);

  const [timer,setTimer] = useState<number>(30);

  useEffect(()=>{
    axios.get("http://localhost:8080/quiz")
    .then((response)=>{
      setQuestions(response.data)
      setQuestion(response.data[questionNumber].question)
      setAnswer(response.data[questionNumber].correctAnswer)
      setAnswers(response.data[questionNumber].answers)
    })
  },[])
  console.log("Questions:",questions);
  return (
    <>
      <QuestionCard timer={timer} setTimer={setTimer} questions ={questions} questionNumber={questionNumber} question={question} setQuestion={setQuestion} answer={answer} setAnswer={setAnswer} answers={answers} setAnswers={setAnswers} setQuestionNumber={setQuestionNumber}/>
    </>
  );
}

export default App;
