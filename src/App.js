
function App() {
  return (
     <Navbar>
        <li>one</li>
        <li>two</li>
        <li>tree</li>
     </Navbar>
  );
}

function Navbar(props){
   return (
      <nav className="navbar">
         <ul className="navbar-nav">
            {props.children}
         </ul>
      </nav>
   )
}
export default App;
