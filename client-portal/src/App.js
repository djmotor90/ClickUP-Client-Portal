import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component
import Home from './pages/Home';
import TaskList from './pages/TaskList';
import TaskView from './pages/TaskView';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/task-list" component={TaskList} />
        <Route path="/task/:taskId" component={TaskView} /> {/* Define a route with a taskId parameter */}
        {/* Add more navigation items as needed */}
        <Route render={() => <div>Page not found</div>} />
      </Switch>
    </Router>
  );
}

export default App;
