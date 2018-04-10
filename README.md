# vue-flip

A vue component that shows a flip component.

## Demo

[Here](https://vue-flip.kevingrandemange.net/)

## Installation

npm i vue-flip

## Browser

Include the script file, then install the component with `Vue.use(VueFlip);`:

```html 
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/vue-clock-simple/dist/vue-flip.min.js"></script>
<script type="text/javascript">
  Vue.use(VueFlip);
</script>
```
## Module

```javascript
import VueFlip from 'vue-flip'
```

## Usage

Use this template:

```html
<vue-flip>
  <div slot="front">
    front
  </div>
  <div slot="back">
    back
  </div>
</vue-flip>
```

You can active the flip on the click with:

```javascript
<vue-flip active-click="true"></vue-flip>
```

or you can active on the hover with:

```javascript
<vue-flip active-hover="true"></vue-flip>
```

# Properties

|               | Description             | Type    | Default Value |
| ------------- | ----------------------- | ------- | ------------- |
| active-click  | flip on click           | Boolean | False         |
| active-hover  | flip on hover           | Boolean | False         |
| height        | coponent height         | String  |               |
| width         | component with          | String  |               |
| transition    | component transition    | String  | 0.5s          |


