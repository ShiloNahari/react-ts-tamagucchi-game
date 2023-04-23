import CharacterClass from '../../../classes/CharacterClass'
import GameClass from '../../../classes/GameClass'
import { timeSince } from '../../../utils/utils';
import './UI.css'
export default function UI(props:{game:GameClass,char:CharacterClass, fHandleGameOver:()=>void}) {
  const {game, char, fHandleGameOver} = props;
  return (
    <div className='UI'>
      <div className="UI-container">
        <div className="UI-ScoreTitle">score: </div>
        <div className="UI-ScoreValue">{game.score}</div>

        <div className="UI-RunningTimeTitle">PLAY-TIME</div>
        <div className="UI-RunningTimeValue">{timeSince((game.startDate as Date))
         }</div>
        <img onClick={()=> char.heal(15)} src="./images/game/heal.png" alt="heal" className="UI-Button-Heal" />
        <img onClick={()=> char.feed(10)} src="./images/game/feed.png" alt="feed" className="UI-Button-Feed" />
        <img onClick={()=> fHandleGameOver()} src="./images/game/kill.png" alt="kill" className="UI-Button-Kill" />
      </div>
    </div>
  )
}
