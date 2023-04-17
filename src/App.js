import 'animate.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Team from "./pages/team/Team";
import Player from './pages/player/Player';
import Coach from './pages/coach/Coach';
import FixtureDetails from './pages/fixture details/FixtureDetails';
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';

function App() {

  return (
    <>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/fixture/:id" element={<FixtureDetails />} />
        <Route path="/coach/:id" element={<Coach />} />
        <Route path="/player/playerId=:playerId" element={<Player />} />
        <Route path={`/team/league=:league&team=:teamId`} element={<Team />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;