import HomePage from "./routes/home/home.component";
import { Routes,Route } from "react-router";

const App = () => {
  return (
    <Routes>
      {/* add a home page / root page as HomePage */}
      <Route
      path="/"
      element={<HomePage />} />
    </Routes>
  )
};

export default App;
