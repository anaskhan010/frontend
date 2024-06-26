// Libs
import { Routes, Route } from "react-router-dom";

// Components
import Layout from "./Layout";
import Dashboard from "./components/dashboard/Dashboard";
import Scheduling from "./components/Scheduling/Scheduling";
import Patient from "./components/patients/Patient";
import Surveys from "./components/surveys/Surveys";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/scheduling" element={<Scheduling />} />
          <Route path="/patients" element={<Patient />} />
          <Route path="/surveys" element={<Surveys />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
