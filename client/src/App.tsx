import axios from 'axios';
import React, {useState,useEffect} from 'react';
import  { Wrapper }  from './App.styles';
import QuestionCard from './components/QuestionCard';
import IQuestion from './interfaces/IQuestion';


const App: React.FC= () => {

  const [ question , setQuestion] = useState<string>("");
  const [questions, setQuestions] = useState<IQuestion[]>([])
  const [ questionNumber, setQuestionNumber] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/quiz")
    .then((response)=>{
      setQuestions(response.data)
      setQuestion(response.data[questionNumber].question)
      setAnswers([...response.data[questionNumber].incorrect_answers,response.data[questionNumber].correct_answer])
    })
  },[])
  return (
    <Wrapper>
      <QuestionCard questions ={questions} questionNumber={questionNumber} question={question} setQuestion={setQuestion} answers={answers} setAnswers={setAnswers}/>
    </Wrapper>
  );
}

export default App;
