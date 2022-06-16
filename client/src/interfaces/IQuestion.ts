export default interface IQuestion {
  questionNumber:number,
  question : string,
  correct_answer : string,
  incorrect_answers: string[],
  answers :string[]
}