import './App.css';
import { Route } from 'react-router-dom'
import List from './components/List';

function App() {
  return (
    <div className="App">
      <Route path='/'>
        <List/>
      </Route>
    </div>
  );
}

export default App;
