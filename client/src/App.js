import { useEffect, useState } from "react";
import { httpGetLatestLaunches } from "./api/houstonBackend";
import Logo from "./components/Logo";

function App() {
  // todo: refactor all of this dev code
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    async function getLaunches() {
      const response = await httpGetLatestLaunches();
      setLaunches(response);
    }
    getLaunches();
  }, []);

  return (
    <div className="h-screen bg-gradient-to-t from-sky-800 via-rose-300 to-sky-800">
      <h1>Welcome to Houston!</h1>
      <Logo height="200" width="300" />
      <h2>Here are your upcoming launches:</h2>
      <ul>
        {launches.map((launch) => (
          <li key={launch.id}>{launch.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
