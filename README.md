# vue-flip

A vue component that shows a flip component.

## Demo

[Here](https://kgrandemange.github.io/vue-flip/)

## Installation

`npm i vue-flip`

`yarn add vue-flip`

## Browser

Include the script file:

```html
  <link rel="stylesheet" href="node_modules/vue-flip/dist/vueFlip.css">
  <vue-flip></vue-flip>
  <script src="https://unpkg.com/vue"></script>
  <script type="text/javascript" src="node_modules/vue-flip/dist/vueFlip.common.js"></script>

  <script>
      new Vue({
        components: {
          vueFlip
        }
      }).$mount('#app')
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
  <template v-slot:front>
    front
  </template>
  <template v-slot:back>
    back
  </template>
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
<vue-flip v-model="flipped"></vue-flip>
```

```vue
this.flipped = true; //or false -> to flip front/back
```

# Properties

|               | Description             | Type    | Required | Default Value |
| ------------- | ----------------------- | ------- | -------- | ------------- |
| active-click  | flip on click           | Boolean | False    | False         |
| active-hover  | flip on hover           | Boolean | False    | False         |
| height        | component height        | String  | False    |               |
| width         | component with          | String  | True     |               |
| transition    | component transition    | String  | False    | 0.5s          |
| v-model       | bind flip with variable | Boolean | False    |               |
