
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from './Components/Landing'
import Question from './Components/Question'
import Result from './Components/Result'
import Data from './Apprentice_TandemFor400_Data.json'
import Ending from './Components/Ending'
//make a loop to create the random numbers we'll use for the rounds.
function App() {
  return (
    <Router>
      {/* add a navbar */}
      <Route exact path="/" render={(props) =>(
        <Landing {...props} score='0' turns='0'/>
        )}
      />
      <Route exact path="/quiz/:id" render={(props) =>(
        <Question {...props} question={Data} />
        )}
      />
      <Route exact path="/quiz/:id/result" render={(props) =>(
        <Result {...props} />
        )}
      />
      <Route exact path="/end" component={Ending}/>
    </Router>
    
  );
}

export default App;
