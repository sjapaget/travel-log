import Navbar from "./components/Navbar.jsx";
import TripCard from "./components/TripCard.jsx";

import trips from "../data"

const App = () => {
  return (
    <div>
      <Navbar pageTitle="Travel Log" />
      <TripCard {...trips[0]} />
    </div>
  )
};

export default App;
