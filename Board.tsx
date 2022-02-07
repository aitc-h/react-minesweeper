import React = require('react');
import { Cell } from './Cell';

type BoardProps = {
  data: Array<Array<typeof Cell>>;
  totalBombs: number;
};

export const Board = (props: BoardProps) => {
  return (
    <div className="board">
      {props.data.map((row, rowIndex) => (
        <div className="board-row">
          {row.map((cell, colIndex) => ({ cell }))}
        </div>
      ))}
    </div>
    //   <Cell
    //     position={{ x: 0, y: 0 }}
    //     value={3}
    //     isOpen={true}
    //     isFlagged={false}
    //   />
    //   <Cell
    //     position={{ x: 0, y: 0 }}
    //     value={2}
    //     isOpen={true}
    //     isFlagged={false}
    //   />
    //   <Cell
    //     position={{ x: 0, y: 0 }}
    //     value={1}
    //     isOpen={true}
    //     isFlagged={false}
    //   />
    //   <Cell
    //     position={{ x: 0, y: 0 }}
    //     value={0}
    //     isOpen={true}
    //     isFlagged={false}
    //   />
    //   <Cell
    //     position={{ x: 0, y: 0 }}
    //     value={-1}
    //     isOpen={true}
    //     isFlagged={false}
    //   />
    // </div>
  );
};
