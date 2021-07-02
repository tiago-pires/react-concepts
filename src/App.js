import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import React, { useState } from "react";

function App() {
   return (
      <Navbar>
         <NavItem icon={<PlusIcon />} />
         <NavItem icon={<BellIcon />} />
         <NavItem icon={<MessengerIcon />} />
      </Navbar>
   );
}

function NavItem(props) {
   const [open, setOpen] = useState(false);

   return (
      <li className="nav-item">
         <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
            {props.icon}
         </a>
         {open && props.children}
      </li>
   );
}

function Navbar(props) {
   return (
      <nav className="navbar">
         <ul className="navbar-nav">{props.children}</ul>
      </nav>
   );
}
export default App;
