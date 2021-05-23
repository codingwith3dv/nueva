const rollup = require("rollup");

rollup.rollup({
  input: './dist/index.js'
}).then(bundle => {
  return bundle.write({
    file: './build/nueva.js',
    format: 'iife',
    name: 'nueva',
    sourcemap: true
  });
});