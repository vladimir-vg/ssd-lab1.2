# Requirements

This project requires Node.js with ES modules support. Any version starting from 14 should work.

# Example of use in Node REPL:

Run `node` and then execute following:

```
let reversedCharNumbers;
import('./src/index.js').then(m => reversedCharNumbers = m.reversedCharNumbers);

console.log(reversedCharNumbers('INNOPOLIS'))
```

Outputs:
```
19 9 12 15 16 15 14 14 9
```
