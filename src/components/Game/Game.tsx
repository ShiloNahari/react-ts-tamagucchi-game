import { useEffect, useState } from "react"
import CharacterClass from "../../classes/CharacterClass"
import GameClass from "../../classes/GameClass"
import Character from "./Character/Character"
import "./Game.css"
import Land from "./Land/Land"
import UI from "./UI/UI"

let gameTick: NodeJS.Timer
const myChar = new CharacterClass()

export default function Game(props: { game: GameClass, fHandleGameOver: () => void }) {
  const { game, fHandleGameOver } = props
  //game tick(ticker)
  const [tick, setTick] = useState(false)
  useEffect(() => {
    gameTick = setInterval(() => {
      setTick(!tick)
      game.addScore(3)
    }, 333)
    return () => clearInterval(gameTick)
  }, [game, tick])
  return (
    <div className="Game">
      <UI game={game} char={myChar} fHandleGameOver={fHandleGameOver} />
      <Character char={myChar} fHandleGameOver={fHandleGameOver} />
      <Land></Land>
      <button type="button" onClick={() => fHandleGameOver()}>
        End Game
      </button>
      {/*TODO char */}
    </div>
  )
}
