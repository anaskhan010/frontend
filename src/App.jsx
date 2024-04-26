// Libs
import { Routes, Route } from "react-router-dom";

// Components
import Layout from "./Layout";
import Dashboard from "./components/dashboard/Dashboard";
import Scheduling from "./components/Scheduling/Scheduling";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/scheduling" element={<Scheduling />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
