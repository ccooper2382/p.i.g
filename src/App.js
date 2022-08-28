import './App.css';
import {useState} from "react";
import PlayerTile from "./components/playerTile";
import CurrentRoll from "./components/currentRoll";
import TotalScore from "./components/totalScore";

function App() {

    const [playerOneName, setPlayerOneName] = useState("")
    const [playerOneScore, setPlayerOneScore] = useState(0)
    const [playerOneTurn, setPlayerOneTurn] = useState(true)

    const [playerTwoName, setPlayerTwoName] = useState("")
    const [playerTwoScore, setPlayerTwoScore] = useState(0)
    const [playerTwoTurn, setPlayerTwoTurn] = useState(false)

    const [currentRoll, setCurrentRoll] = useState(0)
    const [currentTotal, setCurrentTotal] = useState(0)

    const handlePlayerOneNameChange = (event) => {
        setPlayerOneName(event.target.value)
    }

    const handlePlayerTwoNameChange = (event) => {
        setPlayerTwoName(event.target.value)
    }

    const handleScoreSaveOne = () => {
        setPlayerOneScore(currentTotal + playerOneScore)
        setPlayerOneTurn(false)
        setPlayerTwoTurn(true)
        setCurrentTotal(0)
        setCurrentRoll(0)
    }

    const handleScoreSaveTwo = () => {
        setPlayerTwoScore(currentTotal + playerTwoScore)
        setPlayerTwoTurn(false)
        setPlayerOneTurn(true)
        setCurrentTotal(0)
        setCurrentRoll(0)
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


    return (
        <div className="App">
            <PlayerTile name={playerOneName}
                        score={playerOneScore}
                        turn={playerOneTurn}
                        onChange={handlePlayerOneNameChange}
                        onRoll={handleCurrentRollChange}
                        onSave={handleScoreSaveOne}/>
            <CurrentRoll value={currentRoll}/>
            <TotalScore value={currentTotal}/>
            <PlayerTile name={playerTwoName}
                        score={playerTwoScore}
                        turn={playerTwoTurn}
                        onChange={handlePlayerTwoNameChange}
                        onRoll={handleCurrentRollChange}
                        onSave={handleScoreSaveTwo}/>

        </div>
    );
}

export default App;
