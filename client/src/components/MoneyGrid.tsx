import React from 'react';
import { Grid } from './MoneyGrid.styles';
import IMoney from '../interfaces/IMoney';
type Props = {
  grid:IMoney[],
}

const MoneyGrid: React.FC<Props> = ({grid}) => {
  return (
    
    <div>
      {grid.map((item)=>{
        return (
          <Grid>
            <span>{item.id}</span>
            <span>{item.amount}</span>
          </Grid>
        );
      })}
    </div>
  )
}

export default MoneyGrid;
