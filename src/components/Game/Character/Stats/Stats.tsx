import "./Stats.css";

import CharacterClass from '../../../../classes/CharacterClass';
import { valueToBar } from "../../../../utils/utils";

export default function Stats(props:{char:CharacterClass}) {

  const {char} = props

  return (
    <div className="Stats">
        <div className="Stats-health">
            Health{" "}
            <meter
                value={char.health}
                min="1"
                optimum={100}
                low={25}
                high={70}
                max="99"
            />{" "}
            {/* {valueToBar(character.health)} */}
        </div>
        <div className="Stats-fed">
            Food{" "}
            <meter
                value={char.fed}
                min="1"
                max="100"
                optimum={100}
                low={25}
                high={70}
            />{" "}
        </div>
    </div>
);
}
