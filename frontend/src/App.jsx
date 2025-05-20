import "./App.css"; // If you have custom styles, keep this import
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import EmployeeList from "./components/EmployeeList";
import InsertEmployee from "./components/InsertEmployee";
import ShopPage from "./components/ShopPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowEmployeeDetail from "./components/ShowEmployeeDetail";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Router>
        <NavBar />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<EmployeeList />} />
            <Route path="/insert" element={<InsertEmployee />} />
            <Route path="/showdetails/:id" element={<ShowEmployeeDetail />} />
            <Route path="/updatedetails/:id" element={<UpdateEmployee />} />
            <Route path="/shop" element={<ShopPage />} /> 
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
  
}

export default App;
