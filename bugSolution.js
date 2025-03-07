```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 5) {
      console.log('Count is greater than 5');
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
    </div>
  );
}
```