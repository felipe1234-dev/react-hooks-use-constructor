# Constructor in React Hooks

**react-hooks-constructor** is a React Hooks library used to implement a **constructor** for functional React components. Constructors are used to run once and before everything else.

## Installation ⚙️

Use the package manager [npm](https://www.npmjs.com/) to install **react-hooks-constructor**.

```bash
npm install react-hooks-constructor
```

## Usage 🛠️

```javascript
// ...
import useConstructor from "react-hooks-constructor";

function App() {
  useConstructor(() => {
    console.log(
      "This only happens ONCE and it happens BEFORE the initial render."
    );
  });
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>Counter: {counter}</div>
      <div style={{ marginTop: 20 }}>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
    </>
  );
};
```

## Contributing 💭
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License 📝
[MIT](https://choosealicense.com/licenses/mit/)