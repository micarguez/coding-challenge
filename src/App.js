import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Header/Index';
import Dashboard from './pages/Dashboard';
import Trash from './pages/Trash';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode && 'dark'} ${darkMode === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="dark:bg-black">
        <div className="mx-auto px-4 min-h-screen">
          <Router>
            <div className="App">
              <Header handleToggleDarkMode={setDarkMode} />
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/trash" component={Trash} />
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    </div>

  );
}

export default App;
