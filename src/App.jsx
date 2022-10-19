import Navbar from "./components/Navbar.jsx";
import TripCard from "./components/TripCard.jsx";
import tripData from "../data"


const App = () => {
  const tripCards = tripData.map(item => {
    return (
      <TripCard {...item} />
    )
  })

  return (
    <div>
      <Navbar pageTitle="Travel Log" />
      {tripCards}
    </div>
  )
};

export default App;
