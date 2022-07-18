import './App.css';
import useTrip from './api/useTrip';

function App() {
  let { trip, error } = useTrip("hybD6XS9GbdvFuH5PyXdmv")

  console.log(trip)
  console.log(error)
  return (
    <div className="App">
      :)
    </div>
  );
}

export default App;
