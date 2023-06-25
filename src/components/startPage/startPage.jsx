import React from 'react';
import classes from "./start-page.module.css"

function StartPage({onClick, onChange, load, message}) {
    return (
        <article>
            <section>
                <h1>Lets Play PIG!</h1>
                <p>On a turn, a player rolls the die repeatedly. The goal is to accumulate as many points as possible,
                    adding up the numbers rolled on the die. However, if a player rolls a 1, the player's turn is over
                    and any points they have accumulated during this turn are forfeited. Rolling a 1 doesn't wipe out
                    your entire score from previous turns, just the total earned during that particular roll.</p>

                <p>A player can also choose to hold (stop rolling the die) if they do not want to take a chance of
                    rolling
                    a 1 and losing all of their points from this turn. If the player chooses to hold, all of the points
                    rolled during that turn are added to his or her score.</p>

                <p>When a player reaches a total of 100 or more points, the game ends and that player is the winner.</p>
            </section>

            <section className={classes.form}>
                <form>
                    <div className={classes.input}>
                        <label htmlFor="playerOneName">Player One Name</label>
                        <input type="text"
                               id="playerNameOne"
                               name="playerNameOne"
                               placeholder="Enter Name"
                               onChange={onChange}/>
                    </div>
                    <div className={classes.input}>
                        <label htmlFor="playerTwoName">Player Two Name</label>
                        <input type="text"
                               id="playerTwoName"
                               name="playerTwoName"
                               placeholder="Enter Name"
                               onChange={onChange}/>
                    </div>
                </form>
            </section>

            <section>
                <button onClick={onClick}>New Game</button>
                <button onClick={load}>Load Game</button>
            </section>
            <section>{message}</section>
        </article>
    );
}

export default StartPage;