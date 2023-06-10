import { checkWin } from "../helpers/checkWin";
import React from "react";

export const WinMessage = ({
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
  onGameEnded,
  reset,
  setWinningCombination
}) => {
  const [winner, setWinner] = React.useState(null);
  const [draw, setDraw] = React.useState(false);

  React.useEffect(() => {
    if (checkWin(text1, text2, text3)) {
      onGameEnded(true);
      setWinner(text1);
      setWinningCombination(["1", "2", "3"]);
    } else if (checkWin(text1, text4, text7)) {
      onGameEnded(true);
      setWinner(text1);
      setWinningCombination(["1", "4", "7"]);
    } else if (checkWin(text2, text5, text8)) {
      onGameEnded(true);
      setWinner(text2);
      setWinningCombination(["2", "5", "8"]);
    } else if (checkWin(text3, text6, text9)) {
      onGameEnded(true);
      setWinner(text3);
      setWinningCombination(["3", "6", "9"]);
    } else if (checkWin(text4, text5, text6)) {
      onGameEnded(true);
      setWinner(text4);
      setWinningCombination(["4", "5", "6"]);
    } else if (checkWin(text7, text8, text9)) {
      onGameEnded(true);
      setWinner(text7);
      setWinningCombination(["7", "8", "9"]);
    } else if (checkWin(text1, text5, text9)) {
      onGameEnded(true);
      setWinner(text1);
      setWinningCombination(["1", "5", "9"]);
    } else if (checkWin(text3, text5, text7)) {
      onGameEnded(true);
      setWinner(text3);
      setWinningCombination(["3", "5", "7"]);
    } else if (
      [text1, text2, text3, text4, text5, text6, text7, text8, text9].every(
        (square) => square !== " "
      )
    ) {
      onGameEnded(true);
      setDraw(true);
    }
  }, [
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    text8,
    text9,
    onGameEnded
  ]);

  React.useEffect(() => {
    if (reset) {
      setWinner(null);
      setDraw(false);
    }
  }, [reset]);

  return (
    <>
      {winner && <p>Win {winner} player</p>} {draw && <p>Draw!</p>}
    </>
  );
};
