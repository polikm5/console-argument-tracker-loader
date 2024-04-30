## Getting Started

To begin, you'll need to install `console-argument-tracker-loader`:

```console
npm install --save-dev  console-argument-tracker-loader
```

## Usage
```console
// webpack.config.js
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'console-argument-tracker-loader'
          }
        ]
      }
    ]
```

## loader Result
```console
development mode

const a = 1;
console.test(a); // a: 1
// equal
console.log("a:",a); // a: 1
--------------------
function a(b) {
  console.test(b);
}
//a: ƒ a(b) {
//  console.log("b", b);
//}
console.test(a);

production mode

console.log and console.test will be removed
```
