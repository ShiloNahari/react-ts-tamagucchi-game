import React from "react"

export default function NotStarted(props:{fHandleStartGame:()=>void}) {
  const {fHandleStartGame} = props
  return (
    <div className="NotStarted">
      <h2>Tamaguchi Game</h2>
      <p>
        <img src="./images/character/sheepNoAnim.png" alt="" />
      </p>
      <button type="button" onClick={()=>fHandleStartGame()}>start</button>
    </div>
  )
}
