export default interface IQuestion {
  questionNumber:number,
  question : string,
  correct : string,
  wrong: string[],
  answers : string[]
}