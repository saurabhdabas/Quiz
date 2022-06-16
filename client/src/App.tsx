import axios from 'axios';
import React, {useState,useEffect} from 'react';
import  { Wrapper }  from './App.styles';
import QuestionCard from './components/QuestionCard';
import IQuestion from './interfaces/IQuestion';
import IAnswer from './interfaces/IAnswer';

const App: React.FC= () => {

  const [ question , setQuestion] = useState<string>("");
  const [questions, setQuestions] = useState<IQuestion[]>([])
  const [ questionNumber, setQuestionNumber] = useState<number>(0);
  const [ answer, setAnswer] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/quiz")
    .then((response)=>{
      setQuestions(response.data)
      setQuestion(response.data[questionNumber].question)
      setAnswer(response.data[questionNumber].correct_answer)
      setAnswers(response.data[questionNumber].answers)
    })
  },[])
  return (
    <Wrapper>
      <QuestionCard questions ={questions} questionNumber={questionNumber} question={question} setQuestion={setQuestion} answer={answer} setAnswer={setAnswer} answers={answers} setAnswers={setAnswers} setQuestionNumber={setQuestionNumber}/>
    </Wrapper>
  );
}

export default App;
