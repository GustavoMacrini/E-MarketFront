import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Teste from "./pages/teste/index";
import Error from "./pages/error/index";
import HomeViewModel from "./pages/home/index";
import Header from "./components/header/index";
function RoutesApp({ StyleConfiguration }) {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomeViewModel StyleConfiguration={() => StyleConfiguration()} />
          }
        />
        <Route path="/teste" element={<Teste />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/*<Footer />*/}
    </BrowserRouter>
  );
}

export default RoutesApp;
