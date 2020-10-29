
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Homepage from './Components/Landing'
import Question from './Components/Question'
import Result from './Components/Result'

function App() {
  return (
    <Router>
      {/* add a navbar */}
      <Route exact path="/" component={Homepage} />
      <Route exact path="/quiz" component={Question}/>
      <Route exact path="/quiz/result" component={Result}/>
    </Router>
    
  );
}

export default App;
