import logo from './logo.svg';
import './App.css';
import CharactersList from './pages/CharactersList';
import Character from './pages/Character';
import { Route, Routes } from 'react-router';
import Search from './pages/Search';
import Mutation from './pages/Mutation';

function App() {
  return (
        <Routes>
        <Route strict exact path="/" element={<CharactersList/>}/>
        <Route strict exact path="/:id" element={<Character/>} />
        <Route strict exact path="/search" element={<Search/>} />
        <Route strict exact path="/mutation" element={<Mutation/>} />
        </Routes>
  );
}

export default App;
