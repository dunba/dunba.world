import './App.css';
import { BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'
import AboutMe from './components/aboutme';
import Nav from './components/nav'
import Projects from './components/projects'
import Videos from './components/video'
import Connect from './components/connect'
import Resume from './components/resume'
import Volley from './components/volley'
import DunbaWorld from './components/DunbaWorld';



function App() {
  return (
    <div className="App">
        
      <Router>
        <Switch>
        <Route exact component={DunbaWorld} path="/" />
          <Route exact component={AboutMe} path="/homepage" />
          <Route exact component={Projects} path="/projects" /> 
          <Route exact component={Videos} path="/videos" /> 
          <Route exact component={Connect} path="/connect" /> 
          <Route exact component={Resume} path="/resume" /> 
          <Route exact component={Volley} path="/projects/volley" /> 
          <Route exact component={AboutMe} path="/projects/WRLD" />






      </Switch>
      </Router>

    </div>
  );
}

export default App;
