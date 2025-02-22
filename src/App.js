import HomePage from "./routes/home/home.component";
import NavigationBar from "./routes/navigation/navigationBar.component"
import SignIn from "./routes/signin/signin.component";
import Shop from "./routes/shop/shop.component";

import { Routes, Route } from "react-router-dom";
import { ERoutePath } from './const/DataEnum'


const App = () => {
  return (
    <Routes>
      {/* add a root page */}
      <Route path='/' element={<NavigationBar />}>
        {/* add a sub page */}
        <Route index element={<HomePage />} />
        <Route path={ERoutePath.SHOP} element={<Shop />} />
        <Route path={ERoutePath.SIGN_IN} element={<SignIn />} />
      </Route>
    </Routes>
  )
};

export default App;
