import React from "react";
import { Outlet, Link } from "react-router-dom";
import './New.css'
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="https://www.amazon.in/s?k=guitar+acustic&adgrpid=59667348140&ext_vrnc=hi&hvadid=348161869370&hvdev=c&hvlocphy=1007810&hvnetw=g&hvqmt=b&hvrand=9519939195295095084&hvtargid=kwd-307080552412&hydadcr=27669_1932487&tag=googinhydr1-21&ref=pd_sl_1l1o3xx1h7_b">Pricing</Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;