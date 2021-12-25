import React, {useEffect, useState} from 'react';
import Cell from "./Cell";
import '../style/App.css'
import {colors} from "./constants";

const Game = ({length}) => {
  const [playerWin, setPlayerWin] = useState(0)
  const lengthCell = 100;
  const marginCell = 5;
  const [player, setPlayer] = useState(1);
  const [field, setField] = useState([]);

  useEffect(() =>{
    setField(Array(length*length).fill().map((e, i) =>
      ({id: i, player: 0, length: lengthCell, margin: marginCell})
    ))
  }, [])

  const clickOnCell = (cellId) => {
    setField(field.map(item =>
      item.id === cellId ? {...item, player: player} : item
    ))
    setPlayer(player ===1 ? 2 : 1)
  }

  useEffect(() => {
    checkWin();
  }, [field])

  const checkWin = () => {
    if (field.length === 0)
      return;

    if (length === 1){
      setPlayerWin(field[0].player)
      return;
    }

    //check row
    for (let i = 0; i < length; i++) {
      let check = true;
      let value = field[length*i].player;
      if (!value)
        break
      for (let j = 1; j < length; j++) {
        if (field[length*i + j].player !== value){
          check = false;
          break;
        }
      }
      if (check){
        setPlayerWin(value);
        return
      }
    }

    //check column
    for (let i = 0; i < length; i++) {
      let check = true;
      let value = field[i].player;
      if (!value)
        break
      for (let j = 1; j < length; j++) {
        if (field[length*j + i].player !== value){
          check = false;
          break;
        }
      }
      if (check){
        setPlayerWin(value);
        return
      }
    }

    //check diagonal
    let check = true;
    let value = field[0].player;
    if (value){
      for (let i = 1; i < length; i++) {
        if (field[length*i + i].player !== value){
          check = false;
          break;
        }

      }
      if (check){
        setPlayerWin(value);
        return
      }

    }

    //check diagonal
    check = true;
    value = field[length-1].player;
    if (value){
      for (let i = 1; i < length; i++) {
        if (field[length*(i+1) - (i+1)].player !== value){
          check = false;
          break;
        }

      }
      if (check){
        setPlayerWin(value);
        return
      }

    }
  }

  return (
    <div className="field" style={{width: lengthCell*length+(marginCell)*2*length}}>
      {playerWin
      ?
        <div>Player {playerWin} WIN</div>
      :
        field.map(e =>
            <Cell
              key={e.id}
              prop={e}
              click={clickOnCell}
            />)
      }
    </div>
  );
};

export default Game;