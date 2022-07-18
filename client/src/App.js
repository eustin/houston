import { useEffect, useState } from "react";
import HoustonApis from "./api/houstonBackend";
// import moment from "moment";

import Logo from "./components/Logo";

function App() {
  // todo: refactor all of this dev code
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    async function getLaunches() {
      const response = await HoustonApis.httpGetLatestLaunches();
      setLaunches(response);
    }
    getLaunches();
  }, []);

  return (
    // TODO: some sort of app container with layouts/navigation ect.
    <div className="h-screen bg-gradient-to-t from-sky-800 via-rose-300 to-sky-800 flex flex-col items-center justify-center">
      <div className="m-10 text-4xl text-white font-bold">
        Welcome to Houston!
      </div>
      <Logo height="200" width="300" />
      <div className="mt-5 text-2xl text-white font-medium">
        Here are your upcoming launches
      </div>
      <ul className="m-5">
        {launches.map((launch) => (
          <li className="mt-5 text-xl text-white" key={launch.id}>
            {launch.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
