import { useEffect } from 'react'
import CharacterClass from '../../../classes/CharacterClass'
import './Character.css'
import Stats from './Stats/Stats'

const speedMultiplier = 1;


export default function Character(props:{char:CharacterClass, fHandleGameOver:()=>void}) {

  const {char, fHandleGameOver} = props

  useEffect(()=>{
    if (!char.isAlive) {
      console.log('dead!!!');
      fHandleGameOver()
    }

    char.heal((-(1/3) * speedMultiplier))
    char.feed((-0.2 *speedMultiplier))
  })
  return (
    <div className='Character'>
      <Stats char={char}/>
      <div className="Character-sheep">
        {char.show()}
      </div>
      
    </div>
  )
}
