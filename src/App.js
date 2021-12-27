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
      <Nav/>

        <Switch>

        <Route exact component={DunbaWorld} path="/linktree" />
        <Route exact component={Volley} path="/projects/volley}" />

          <Route exact component={AboutMe} path="/" />
      </Switch>
      <Resume/>
      <Connect/>
      <Projects/>
      </Router>

    </div>
  );
}

export default App;
