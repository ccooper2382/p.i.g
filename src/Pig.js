import './App.css';
import {useState} from "react";
import React from "react";
import PlayerTile from "./components/playerTile";
import CurrentRoll from "./components/currentRoll";
import TotalScore from "./components/totalScore";
import StartPage from "./components/startPage";
import Victory from "./components/victory";
import classes from "./components/Layout.module.css"



function Pig() {

    const [playerOneName, setPlayerOneName] = useState("")
    const [playerOneScore, setPlayerOneScore] = useState(99)
    const [playerOneTurn, setPlayerOneTurn] = useState(true)

    const [playerTwoName, setPlayerTwoName] = useState("")
    const [playerTwoScore, setPlayerTwoScore] = useState(0)
    const [playerTwoTurn, setPlayerTwoTurn] = useState(false)

    const [currentRoll, setCurrentRoll] = useState(0)
    const [currentTotal, setCurrentTotal] = useState(0)

    const [newGame, setNewGame] = useState(false)

    const [victory, setVictory] = useState(false)
    const [winner, setWinner] = useState(null)

    const [message, setMessage] = useState('')

    const store = () => {
        try {
            let data = {

                playerOne:
                    {
                        name: playerOneName,
                        score: playerOneScore,
                        turn: playerOneTurn
                    },

                playerTwo:
                    {
                        name: playerTwoName,
                        score: playerTwoScore,
                        turn: playerTwoTurn
                    },

                score:
                    {
                        roll: currentRoll,
                        total: currentTotal
                    }

            }

            localStorage.setItem("gameData", JSON.stringify(data))
        } catch (error) {
            setMessage(`Unable to save game: ${error}`)
        }

    }

    const load = () => {
        try {
            let data = JSON.parse(localStorage.getItem("gameData"))
            setNewGame(true)

            setPlayerOneName(data.playerOne.name)
            setPlayerTwoName(data.playerTwo.name)

            setPlayerOneTurn(data.playerOne.turn)
            setPlayerTwoTurn(data.playerTwo.turn)

            setPlayerOneScore(data.playerOne.score)
            setPlayerTwoScore(data.playerOne.score)

            setCurrentRoll(data.score.roll)
            setCurrentTotal(data.score.total)
        } catch (error) {
            setMessage(`An error occurred when loading ${error}`)
        }

    }

    const resetState = () => {
        resetNumbers()
        setPlayerOneName("")
        setPlayerTwoName("")
        setVictory(false)
        setWinner(null)
        setNewGame(false)

    }

    const resetNumbers = () => {
        setPlayerOneScore(0);
        setPlayerTwoScore(0)
        setCurrentRoll(0)
        setCurrentTotal(0)
    }

    const handlePlayerNameChange = (event) => {
        if (event.target.name === "playerNameOne") {
            setPlayerOneName(event.target.value)
        } else {
            setPlayerTwoName(event.target.value)
        }

    }

    const handleNewGame = () => {
        if (newGame) {
            resetState()
        } else {
            setNewGame(true)
        }
    }


    const handleScoreSave = (player) => {
        if (player === 1) {
            setPlayerOneScore(currentTotal + playerOneScore)
            setPlayerOneTurn(false)
            setPlayerTwoTurn(true)
            setCurrentTotal(0)
            setCurrentRoll(0)
        } else {
            setPlayerTwoScore(currentTotal + playerTwoScore)
            setPlayerTwoTurn(false)
            setPlayerOneTurn(true)
            setCurrentTotal(0)
            setCurrentRoll(0)
        }
    }

    //inclusive random number generator
    const rollEm = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleCurrentRollChange = () => {
        let roll = rollEm(1, 6)
        setCurrentRoll(roll)
        setCurrentTotal(currentTotal + roll)
    }

    // Changes the players turns when currentRoll is 1
    if (currentRoll === 1) {
        if (playerOneTurn && !playerTwoTurn) {
            setPlayerOneTurn(false)
            setPlayerTwoTurn(true)
            setCurrentRoll(0)
            setCurrentTotal(0)
        } else {
            setPlayerOneTurn(true)
            setPlayerTwoTurn(false)
            setCurrentRoll(0)
            setCurrentTotal(0)
        }

    }

    const playerWins = (player) => {
        if (player === 1) {
            setVictory(true)
            setWinner(playerOneName)

        } else if (player === 2){
            setVictory(true)
            setWinner(playerTwoName)
        }else {}
        resetNumbers()
    }

    if (playerOneScore + currentTotal >= 100) playerWins(1)
    if (playerTwoScore + currentTotal >= 100) playerWins(2)

    if (!newGame) {
        return <div><StartPage load={load} onClick={handleNewGame} onChange={handlePlayerNameChange} message={message}/></div>
    } else if (victory) {
       return <Victory victor={winner} show={victory} onClick={handleNewGame}/>
    }

    return <div className={classes.flex_container}>

        <PlayerTile name={playerOneName}
                    score={playerOneScore}
                    turn={playerOneTurn}
                    onRoll={handleCurrentRollChange}
                    onSave={(() => handleScoreSave(1))}/>
        <div className={classes.flex_item}>

            <CurrentRoll value={currentRoll}/>
            <TotalScore value={currentTotal}/>
            <button onClick={store}>Save Game</button>
            <div>{message}</div>
        </div>
        <PlayerTile name={playerTwoName}
                    score={playerTwoScore}
                    turn={playerTwoTurn}
                    onRoll={handleCurrentRollChange}
                    onSave={(() => handleScoreSave(2))}/>

    </div>


}

export default Pig;
