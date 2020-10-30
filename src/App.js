
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Homepage from './Components/Landing'
import Question from './Components/Question'
import Result from './Components/Result'
import Data from './Apprentice_TandemFor400_Data.json'
//make a loop to create the random numbers we'll use for the rounds.
function App() {
  return (
    <Router>
      {/* add a navbar */}
      <Route exact path="/" component={Homepage} />
      <Route exact path="/quiz/:id" render={(props) =>(
        <Question {...props} question={Data} number={0}/>
        )}
      />
      <Route exact path="/quiz/:id/result" render={(props) =>(
        <Result {...props} />
        )}
      />
    </Router>
    
  );
}

export default App;
