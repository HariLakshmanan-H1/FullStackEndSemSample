import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AddOrder from "./AddOrder";
import SearchOrder from "./SearchOrder";
import UpdateOrder from "./UpdateOrder";
import { DeleteOrder } from "./DeleteOrder";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>GHI Frontend</h1>

        <nav>
          <Link to="/add">Add</Link>
          <Link to="/search">Search</Link>
          <Link to="/update">Update</Link>
          <Link to="/delete">Delete</Link>
        </nav>
        <Routes>
          <Route path="/add" element={<AddOrder />}/>
          <Route path="/search" element={<SearchOrder />} />
          <Route path="/update" element={<UpdateOrder />} />
          <Route path="/delete" element={<DeleteOrder />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}