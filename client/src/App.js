import { useEffect, useState } from "react";
import { httpGetLatestLaunches } from "./api/houstonBackend";

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
    <div>
      <div>Welcome to Houston!</div>
      <div>Here are your upcoming launches:</div>
      <ul>
        {launches.map((launch) => (
          <li key={launch.id}>{launch.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
