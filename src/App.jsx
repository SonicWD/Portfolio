import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Resume from './components/Resume';
import Work from './components/Work';
import Contact from './components/Contact';
import Experiences from './components/Experiences';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Sidebar />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
            <Route path="/experiences" component={Experiences} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
