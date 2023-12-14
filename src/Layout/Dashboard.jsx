import { NavLink, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import useCart from "../hooks/useCart";
const Dashboard = () => {
   const [cart] =  useCart();
    return (
        <div className="drawer lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
   
  <div className="drawer-side" >
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full  bg-[#D1A054] ">
      {/* Sidebar content here */}
      <li><NavLink to="/dashboard/mycart1"><FaHome />User Home</NavLink></li>
      <li><NavLink to="/dashboard/mycart2"><FaCalendarAlt /> Reservations</NavLink></li>
      <li><NavLink to="/dashboard/mycart3"><FaWallet /> Payment History</NavLink></li>
      <li>
        <NavLink to="/dashboard/mycart"><FaShoppingCart/> My Cart
        <span className="badge badge-secondary">+{cart?.length || 0}</span>
        </NavLink>

     </li>
      <div className="divider"></div>
      <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
      <li><NavLink to="/"></NavLink></li>
      <li><NavLink to="/"></NavLink></li>
      <li><NavLink to="/"></NavLink></li>
   
     
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;


/// jan 

// import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
// import { NavLink, Outlet } from "react-router-dom";
// import useCart from "../hooks/useCart";


// const Dashboard = () => {
//     const [cart] = useCart();

//     return (
//         <div className="flex">
            
//             {/* dashboard side bar */}
//             <div className="w-64 min-h-screen bg-orange-400">
//                 <ul className="menu p-4">
//                     <li>
//                         <NavLink to="/dashboard/userHome">
//                             <FaHome></FaHome>
//                             User Home</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/dashboard/reservation">
//                             <FaCalendar></FaCalendar>
//                             Reservation</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/dashboard/mycart">
//                             <FaShoppingCart></FaShoppingCart>
//                             My Cart ({cart.length})</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/dashboard/review">
//                             <FaAd></FaAd>
//                             Add a Review</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/dashboard/bookings">
//                             <FaList></FaList>
//                             My Bookings</NavLink>
//                     </li>
//                     <div className="divider"></div>
//                     <li>
//                         <NavLink to="/">
//                             <FaHome></FaHome>
//                             Home</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/order/salad">
//                             <FaSearch></FaSearch>
//                             Menu</NavLink>
//                     </li>
//                 </ul>
//             </div>
//             {/* dashboard content */}
//             <div className="flex-1 p-8">
//                 <Outlet></Outlet>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;