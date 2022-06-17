export default interface IQuestion {
  questionNumber:number,
  question : string,
  correctAnswer : string,
  incorrectAnswers: string[],
  answers :string[]
}