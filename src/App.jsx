import { Route, Routes } from "react-router-dom";
import { Home } from "./ui";
import Layout from "./components/Layout";
import Build from "./ui/build";
import Benefits from "./ui/benefits";
import Dpos from "./ui/dpos";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/build" element={<Build />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/dpos" element={<Dpos />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
