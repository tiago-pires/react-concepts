function App() {
   return (
      <List>
         <li>one</li>
         <li>two</li>
         <li>tree</li>
      </List>
   );
}

function List(props) {
   return (
      <nav>
         <ul>{props.children}</ul>
      </nav>
   );
}

export default App;
