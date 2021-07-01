import {ReactComponent as BellIcon} from './icons/bell.svg'
import {ReactComponent as CogIcon} from './icons/cog.svg'

function App() {
   return (
      <ul>
         <li><BellIcon/> Text</li>
         <ListItem icon={<CogIcon/>} />
      </ul>
   );
}

function ListItem(props) {
   return (
      <li>{props.icon}</li>
   );
}

export default App;
