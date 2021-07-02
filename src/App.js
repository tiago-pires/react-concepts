import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as BellIcon } from "./icons/bell.svg";

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
   return (
      <li className="nav-item">
         <a href="#" className="icon-button">
            {props.icon} 
         </a>
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
