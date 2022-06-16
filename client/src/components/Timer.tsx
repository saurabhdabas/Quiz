import React,{useEffect} from 'react'
import { TimerDesign } from './timer.styles';
type Props = {
  timer:number,
  setTimer:React.Dispatch<React.SetStateAction<number>>
}

const Timer:React.FC<Props> = ({timer, setTimer}) => {

  useEffect(()=>{
    if(timer > 0){
      setTimeout(()=>{
        setTimer(timer - 1);
      },1000)
    }
    console.log("timer:",timer)
  },[timer])

  return (
    <TimerDesign>
      <div>{timer}</div>
    </TimerDesign>
  )
}

export default Timer;
