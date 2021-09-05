import './App.css';
import { BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'
import AboutMe from './components/aboutme';
import Nav from './components/nav'
import Projects from './components/projects'
import Videos from './components/video'
import Connect from './components/connect'
import Resume from './components/resume'

function App() {
  return (
    <div className="App">
        
      <Router>
      <Nav/>
        <Switch>
          <Route exact component={AboutMe} path="/" />
          <Route exact component={Projects} path="/projects" /> 
          <Route exact component={Videos} path="/videos" /> 
          <Route exact component={Connect} path="/connect" /> 
          <Route exact component={Resume} path="/resume" /> 




      </Switch>
      </Router>

    </div>
  );
}

export default App;
