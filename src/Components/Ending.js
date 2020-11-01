import Data from '../Apprentice_TandemFor400_Data.json'
import {Link} from 'react-router-dom'

function Ending (props){

    return(
        <div>
            <h1>We've Reached the end!</h1>
            <p>Your final score was:{props.location.score}</p>
        </div>
    )
}
export default Ending;