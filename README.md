# crandom
A simple random number generator based on circular equations.  
  
Difficulty is adjustable by changing the power of the equation.


# Usage
## Importing

### **with Typescript**
```ts
import crandom from 'crandom';
``` 

### **with Vanilla Javascript**
```js
const { default: crandom } = require('crandom');
```

## Generating

Generate a random number between `1` and `5` with difficulty `3`:
```ts
const num = crandom.rand(1, 5);
num // 4
```

Generate a random number between `0` and `100` with difficulty `5`:
```ts
const num = crandom.rand(0, 100, 5);
num // 9
```