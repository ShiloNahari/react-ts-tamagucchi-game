import { timeSince } from "../../utils/utils"

export default function GameOver(props:{score:number, playTime:Date|null, fHandleStartGame:()=>void}) {
  // const {fHandleGameOver} = props

  const {score, playTime, fHandleStartGame} = props
  return (
    <div className='GameOver'>
      <h2>GameOver!</h2>
      <p>Your final score is: <b>{score}</b></p>
      <p>You survived for <b>{timeSince(playTime as Date)}</b> long!</p>
      <p>
        <img src="./images/character/rip.gif" alt="dead" />
      </p>
      <button type="button" onClick={()=>fHandleStartGame()}> start over!</button>
    </div>
  )
}