# SVG Icons as React Components

```javascript
// import icons as React Components
import {ReactComponent as BellIcon} from './icons/bell.svg'
import {ReactComponent as CogIcon} from './icons/cog.svg'

function App() {
   return (
      <ul>
         <li><BellIcon/> Text</li> // use directly
         <ListItem icon={<CogIcon/>} /> //use component as prop
      </ul>
   );
}

function ListItem(props) {
   return (
      <li>{props.icon}</li>
   );
}

export default App;
```
