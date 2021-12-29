import './App.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import AboutMe from './components/aboutme';
import Nav from './components/nav'
import Projects from './components/projects'
import Videos from './components/video'
import Connect from './components/connect'
import Resume from './components/resume'
import Volley from './components/volley'
import DunbaWorld from './components/DunbaWorld';
import Experience from './components/experience'
import Skills from './components/skills'




function App() {
  return (
    <div className="App">

      <Router>
        <Nav />
        <Switch>
          <Route exact component={DunbaWorld} path="/linktree" />
          <Route component={AboutMe} path="/projects/WRLD" />
          <Route component={Volley} path="/projects/Volley" />
          <Route exact component={AboutMe} path="/" />
          < Route exact component={Skills} path="/skills" />
          < Route exact component={Resume} path="/resume" />

          <  Route exact component={Experience} path="/experience" />
          < Route exact component={Projects} path="/projects" />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
