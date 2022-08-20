import './App.css';
import {useState} from "react";
import PlayerTile from "./components/playerTile";
import CurrentRoll from "./components/currentRoll";

function App() {

    const [playerOneName, setPlayerOneName] = useState("")
    const [playerOneScore, setPlayerOneScore] = useState(0)
    const [playerOneTurn, setPlayerOneTurn] = useState(true)

    const [playerTwoName, setPlayerTwoName] = useState("")
    const [playerTwoScore, setPlayerTwoScore] = useState(0)
    const [playerTwoTurn, setPlayerTwoTurn] = useState(false)

    const [currentRoll, setCurrentRoll] = useState(0)

    const handlePlayerOneNameChange = (event) => {
        setPlayerOneName(event.target.value)
    }

    const handlePlayerTwoNameChange = (event) => {
        setPlayerTwoName(event.target.value)
console.log(playerTwoName)
    }

    //inclusive random number generator
    const rollEm = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    const handleCurrentRollChange = () => {
        setCurrentRoll(rollEm(1,6))
    }


    return (
        <div className="App">
            <PlayerTile name={playerOneName}
                        score={playerOneScore}
                        turn={playerOneTurn}
                        onChange={handlePlayerOneNameChange}
            onRoll={handleCurrentRollChange}/>
            <CurrentRoll value={currentRoll}/>
            <PlayerTile name={playerTwoName}
                        score={playerTwoScore}
                        turn={playerTwoTurn}
                        onChange={handlePlayerTwoNameChange}
                        onRoll={handleCurrentRollChange}/>

        </div>
    );
}

export default App;
