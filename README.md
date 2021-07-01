# Props Children

Pass children nodes to another component to act as parent.
Bellow we can pass nodes to `<List>` to be wrapped in `<nav><ul>` later on

```javascript
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
```

Result
```html
<nav>
   <ul class="App">
      <li>one</li>
      <li>two</li>
      <li>tree</li>
   </ul>
</nav>
```

## Resources

[fireship channel](https://youtu.be/IF6k0uZuypA?t=250)
