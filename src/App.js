import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";

function App() {
   return (
      <Navbar>
         <NavItem icon={<MessengerIcon />} />
         <NavItem icon={<PlusIcon />} />
         <NavItem icon={<CogIcon />} />
      </Navbar>
   );
}

function NavItem(props) {
   return (
      <li className="nav-item"> {props.icon} </li>
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
