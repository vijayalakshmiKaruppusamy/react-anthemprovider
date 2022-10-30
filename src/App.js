import LandingPage from "./Components/Dashboard/landingPage";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Drug from "./Components/Dashboard/Drugs/drug";
import Pharmacy from "./Components/Dashboard/Pharmacy/pharmacy";
import Provider from "./Components/Dashboard/Providers/providers";
import Error from "./Components/Dashboard/Drugs/error";

function App() {
  return (
   <BrowserRouter>
        <Routes>
        <Route path="/anthem" element={<LandingPage />} />
        <Route path="/provider" element={<Provider />} />
        <Route path='/drug' element={<Drug />} />
        <Route path='/pharmacy' element={<Pharmacy/>} />
        <Route path='/error' element={<Error />}  />
        </Routes>
    </BrowserRouter>
   );
}

export default App;
