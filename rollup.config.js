export default [
  {
    input: './dist/index.js',
    output: {
      file: './build/nueva.common.js',
      format: 'iife'
    }
  },
  {
    input: './dist/index.js',
    output: {
      file: './build/nueva.es.js',
      format: 'es'
    }
  }
]