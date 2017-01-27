# react-console-wrapper

react-console-wrapper wraps the console so you can log messages from your render function. This makes it simple to log things for debugging purposes on stateless components.

### Example:
```javascript
import Console from 'react-console-wrapper';

const myConst = 'works!';

const MyComponent = () => (
  <div>
    <h1>My Component</h1>
    <Console log="First log message" />
    <Console clear />
    <Console log="Second log message" />
    <Console log={2 + 2} />
    <Console log={`Template literals ${myConst}`} />
    <Console info="Info message" />
    <Console error="Error message" />
  </div>
)
```
