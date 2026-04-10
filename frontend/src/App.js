import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AddOrder from "./AddOrder";
import SearchOrder from "./SearchOrder";
import UpdateOrder from "./UpdateOrder";
import { DeleteOrder } from "./DeleteOrder";
import ViewOrders from "./ViewOrders";

export default function App() {
  return (
    <BrowserRouter>
      <div >
        <h1>GHI Frontend</h1>

        <nav>
          <Link to="/add">Add</Link>
          <Link to="/search">Search</Link>
          <Link to="/update">Update</Link>
          <Link to="/delete">Delete</Link>
          <Link to="/view">View</Link>
        </nav>
        <Routes>
          <Route path="/add" element={<AddOrder />}/>
          <Route path="/search" element={<SearchOrder />} />
          <Route path="/update" element={<UpdateOrder />} />
          <Route path="/delete" element={<DeleteOrder />} />
          <Route path="/view" element={<ViewOrders />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}