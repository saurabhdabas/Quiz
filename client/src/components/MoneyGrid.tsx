import React from 'react';
import { Grid } from './MoneyGrid.styles';
import IMoney from '../interfaces/IMoney';
type Props = {
  grid:IMoney[],
  questionNumber:number
}

const MoneyGrid: React.FC<Props> = ({grid,questionNumber}) => {
  return (
    
    <div>
      {grid.map((item)=>{
        return (
          <Grid>
            <li
              className={
                questionNumber === item.id
                  ? "active"
                  : ""
              }>
              <span>{item.id}</span>
              <span>{item.amount}</span>
            </li>
          </Grid>
        );
      })}
    </div>
  )
}

export default MoneyGrid;
