import './App.css';
import { BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'
import AboutMe from './components/aboutme';
import Skills from './components/skills'
import Nav from './components/nav'
import Projects from './components/projects'
import Videos from './components/video'

function App() {
  return (
    <div className="App">
            <Nav/>
      <Router>
        <Switch>
          <Route exact component={AboutMe} path="/" />
          <Route exact component={Skills} path="/skills" /> 
          <Route exact component={Projects} path="/projects" /> 
          <Route exact component={Videos} path="/videos" /> 


      </Switch>
      </Router>

    </div>
  );
}

export default App;
