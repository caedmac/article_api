import './App.css';
import CreateComponent from './components/CreateComponent';
import ReadComponent from './components/ReadComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UpdateComponent from './components/UpdateComponent';
import MenuComponent from './components/MenuComponent';

function App() {
  return (
    <div>
      <Router>
        <MenuComponent></MenuComponent>
        <div className="main">
          <h2 className="main-header">Article list</h2>
          <div>
            <Routes>
              <Route
                exact
                path="/create"
                element={<CreateComponent></CreateComponent>}
              />
              <Route
                exact
                path="/read"
                element={<ReadComponent></ReadComponent>}
              />
              <Route
                exact
                path="/update"
                element={<UpdateComponent></UpdateComponent>}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
