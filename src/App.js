import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Logo from './components/Logo/Logo.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';

function App() {
  return (
    <div className="kanban-wrapper">
        <div className="kanban">
          <BrowserRouter>
            <Logo/>
            <Header/>
            <Sidebar/>
          </BrowserRouter>
        </div>
      </div>
  );
}

export default App;
