# Nueva

<div align="center" >
  <img src="./assets/nueva_new.png" width="200"height="200"/>

  [![npm](https://img.shields.io/npm/v/nueva?color=%2300bfff&style=for-the-badge)](https://www.npmjs.org/package/nueva)
</div>

A reactive component based UI library used for making user interfaces. 

## Usage
- npm: 
```bash
npm install nueva
```
- yarn: 
```bash
yarn add nueva
```
- cdn: 
```html
<script src="https://unpkg.com/nueva@0.0.7/build/nueva.js"></script>
```

## Examples
- For CDN
```javascript
class App extends nueva.Component{
  render() {
    return nueva.createElem(
      'div',
      nueva.createElem('h1', 'I am H1'),
      nueva.createElem('h2', 'I am H2')
    )
  }
}
nueva.render(nueva.createElem(new App()), document.getElementById('app'))
```
