# vue-flip

A vue component that shows a flip component.

## Demo

[Here](https://vue-flip.kevingrandemange.net/)

## Installation

`npm i vue-flip`

`yarn add vue-flip`

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

```vue
<template>
  <vue-flip></vue-flip>
</template>
```

```javascript
import VueFlip from 'vue-flip';
export default {
  components: {
    'vue-flip': VueFlip
  }
}
```

## Usage

Use this template:

```vue
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

```vue
<vue-flip active-click="true"></vue-flip>
```

or you can active on the hover with:

```vue
<vue-flip active-hover="true"></vue-flip>
```

or you can bind with a variable:

```vue
<vue-flip :bindWithMe="flipped"></vue-flip>
```

```vue
this.flipped = true; //or false -> to flip front/back
```

# Properties

|               | Description             | Type    | Required | Default Value |
| ------------- | ----------------------- | ------- | -------- | ------------- |
| active-click  | flip on click           | Boolean | False    | False         |
| active-hover  | flip on hover           | Boolean | False    | False         |
| height        | component height         | String  | False    |               |
| width         | component with          | String  | True     |               |
| transition    | component transition    | String  | False    | 0.5s          |
| bindWithMe    | bind flip with variable | Boolean | False    |               |


