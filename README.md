6/23/23 Implemented error handling and did some work to get it ready for the portfolio.  Finally!

10/15/2022 With that all features are working! Now I just need to...  Crap forgot validation.  Almost all features have been implemented just need to do validation (not really needed for this project but better safe than sorry) then polish up the code and see if anyone on Reddit would be willing to do a code review

9/29/2022 Apparently when using JSON square brackets make an arrar and not an object. Tried to use a JSON string in local storage for the save game feature and spent over an hour trying to understand why everything was undefined

9/24/2022 React Router looks like overkill so I just added an element to the state that is boolean to determing if the start page or the game itself will be displayed

9/15/2022 css modules have seen fit to start working so that is the plan going forward.

9/11/22 Finally got Tailwindcss working.  That was an ordeal mostly because I had set the output to App.css instead of index.css.  Now to figure out how to get the css to compile at the same time as the react on save so I don't have to keep backing out of npm start run  Tailwind compile then restart.

9/7/22 css modules arent working so I think I'm going to try Tailwind

8/20/2022 Ok so apparently the button element has a default action of submit when it is in a form. That is why the page kept reloading when I clicked the roll button.

8/17/22 I don't know what I'm doing wrong. I can update the state but it imediatly reverts to the initial state after I click the roll button or if I press enter. It also seems to load 4 times whenever anything changes

On a turn, a player rolls the die repeatedly. The goal is to accumulate as many points as possible, adding up the numbers rolled on the die. However, if a player rolls a 1, the player's turn is over and any points they have accumulated during this turn are forfeited. Rolling a 1 doesn't wipe out your entire score from previous turns, just the total earned during that particular roll.

A player can also choose to hold (stop rolling the die) if they do not want to take a chance of rolling a 1 and losing all of their points from this turn. If the player chooses to hold, all of the points rolled during that turn are added to his or her score.

When a player reaches a total of 100 or more points, the game ends and that player is the winner.
