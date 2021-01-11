import './App.css';
import Faq from  './Faq';
import Footer from './Footer'
import {Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Faq} />
        <Route exact path='/footer' component={Footer} />
      </Switch>
    </div>
  );
}

export default App;
