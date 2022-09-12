import './App.css';
import ProjectList from './components/ProjectList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddProject from './components/AddProject';
import UpdateProject from './components/UpdateProject';
import ProjectDetail from './components/ProjectDetail';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route  path='/' element={<ProjectList />} />
          <Route  path='/add-project' element={<AddProject />} />
          <Route  path='/project-detail/:projectId' element={<ProjectDetail />} />
          <Route  path='/update-project/:id' element={<UpdateProject />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;

