# Nueva

<div align="center" >
  <img src="./assets/nueva_full_img.png" style="aspect-ratio: 16/9;" />

  [![npm](https://img.shields.io/npm/v/nueva?color=%2300bfff&style=flat-square)](https://www.npmjs.org/package/nueva)
  [![license](https://img.shields.io/github/license/codingwith3dv/nueva?color=%2388&style=flat-square)](https://github.com/codingwith3dv/nueva/tree/master/LICENSE)
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
<script src="https://unpkg.com/nueva@{latest_version}/build/nueva.js"></script>
```

## Examples
- For CDN
```javascript
class App extends nueva.Component {
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
