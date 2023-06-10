import { Button } from "./components/Button";
import "./styles.css";
import React from "react";
import { WinMessage } from "./components/WinMessage";

export default function App() {
  const [counter, setCounter] = React.useState(0);

  const [place1, setPlace1] = React.useState(false);
  const [place2, setPlace2] = React.useState(false);
  const [place3, setPlace3] = React.useState(false);
  const [place4, setPlace4] = React.useState(false);
  const [place5, setPlace5] = React.useState(false);
  const [place6, setPlace6] = React.useState(false);
  const [place7, setPlace7] = React.useState(false);
  const [place8, setPlace8] = React.useState(false);
  const [place9, setPlace9] = React.useState(false);

  const [text1, setText1] = React.useState(" ");
  const [text2, setText2] = React.useState(" ");
  const [text3, setText3] = React.useState(" ");
  const [text4, setText4] = React.useState(" ");
  const [text5, setText5] = React.useState(" ");
  const [text6, setText6] = React.useState(" ");
  const [text7, setText7] = React.useState(" ");
  const [text8, setText8] = React.useState(" ");
  const [text9, setText9] = React.useState(" ");

  const styles = {
    width: "30px",
    height: "30px",
    verticalAlign: "top"
  };

  const handleClick = (setPlace, setText, place) => {
    if (place === "X" || place === "O") return;
    setPlace(true);
    setCounter((prevCounter) => {
      setText(prevCounter % 2 === 0 ? "X" : "O");
      return prevCounter + 1;
    });
  };
  const [gameEnded, setGameEnded] = React.useState(false);

  const handleGameEnd = React.useCallback((isGameEnded) => {
    setGameEnded(isGameEnded);
  }, []);

  const [reset, setReset] = React.useState(false);

  const handleReset = () => {
    setPlace1(false);
    setPlace2(false);
    setPlace3(false);
    setPlace4(false);
    setPlace5(false);
    setPlace6(false);
    setPlace7(false);
    setPlace8(false);
    setPlace9(false);

    setText1(" ");
    setText2(" ");
    setText3(" ");
    setText4(" ");
    setText5(" ");
    setText6(" ");
    setText7(" ");
    setText8(" ");
    setText9(" ");

    setGameEnded(false);

    setReset(true);

    setTimeout(() => {
      setReset(false);
    }, 0);
    setWinningCombination([]);
  };

  const [winningCombination, setWinningCombination] = React.useState([]);
  const handleSetWinningCombination = React.useCallback((arrayValue) => {
    setWinningCombination(arrayValue);
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Tic Tac Toe</h1>
        <Button
          id="reset"
          text="Reset"
          style={{ marginBottom: "5px" }}
          handleClick={handleReset}
        />
      </div>

      <div>
        <Button
          id="1"
          style={styles}
          disabled={place1 || gameEnded}
          text={text1}
          handleClick={() => handleClick(setPlace1, setText1, place1)}
          winningCombination={winningCombination}
        />
        <Button
          id="2"
          style={styles}
          disabled={place2 || gameEnded}
          text={text2}
          handleClick={() => handleClick(setPlace2, setText2, place2)}
          winningCombination={winningCombination}
        />
        <Button
          id="3"
          style={styles}
          disabled={place3 || gameEnded}
          text={text3}
          handleClick={() => handleClick(setPlace3, setText3, place3)}
          winningCombination={winningCombination}
        />
      </div>
      <div>
        <Button
          id="4"
          style={styles}
          disabled={place4 || gameEnded}
          text={text4}
          handleClick={() => handleClick(setPlace4, setText4, place4)}
          winningCombination={winningCombination}
        />
        <Button
          id="5"
          style={styles}
          disabled={place5 || gameEnded}
          text={text5}
          handleClick={() => handleClick(setPlace5, setText5, place5)}
          winningCombination={winningCombination}
        />
        <Button
          id="6"
          style={styles}
          disabled={place6 || gameEnded}
          text={text6}
          handleClick={() => handleClick(setPlace6, setText6, place6)}
          winningCombination={winningCombination}
        />
      </div>
      <div>
        <Button
          id="7"
          style={styles}
          disabled={place7 || gameEnded}
          text={text7}
          handleClick={() => handleClick(setPlace7, setText7, place7)}
          winningCombination={winningCombination}
        />
        <Button
          id="8"
          style={styles}
          disabled={place8 || gameEnded}
          text={text8}
          handleClick={() => handleClick(setPlace8, setText8, place8)}
          winningCombination={winningCombination}
        />
        <Button
          id="9"
          style={styles}
          disabled={place9 || gameEnded}
          text={text9}
          handleClick={() => handleClick(setPlace9, setText9, place9)}
          winningCombination={winningCombination}
        />
      </div>
      <WinMessage
        text1={text1}
        text2={text2}
        text3={text3}
        text4={text4}
        text5={text5}
        text6={text6}
        text7={text7}
        text8={text8}
        text9={text9}
        onGameEnded={handleGameEnd}
        reset={reset}
        setWinningCombination={handleSetWinningCombination}
      />
    </div>
  );
}
