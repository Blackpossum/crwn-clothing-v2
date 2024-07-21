import HomePage from "./routes/home/home.component";
import NavigationBar from "./routes/navigation/navigationBar.component"
import SignIn from "./routes/signin/signin.component";
import { Routes,Route } from "react-router-dom";

const Shop = () => {
  return (
    <h1>this is shop page</h1>
  )
}

const App = () => {
  return (
    <Routes>
      {/* add a root page */}
      <Route path='/' element={<NavigationBar/>}>
        {/* add a sub page */}
        <Route index element={<HomePage />}/>
        <Route path='shop' element={<Shop />} />
        <Route path='sign-In' element={<SignIn />} />
      </Route>
    </Routes>
  )
};

export default App;
