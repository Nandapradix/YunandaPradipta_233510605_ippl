import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/catalog";

function AppRouter() {
return ( <BrowserRouter> <Routes>

```
    <Route
      path="/"
      element={<Home />}
    />

    <Route
      path="/catalog"
      element={<Catalog />}
    />

  </Routes>
</BrowserRouter>


);
}

export default AppRouter;
