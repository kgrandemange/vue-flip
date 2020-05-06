
![Test](https://github.com/kgrandemange/vue-flip/workflows/Test/badge.svg)

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
<script src="https://unpkg.com/vue"></script>
<script src="./vueFlip.umd.js"></script>
<style>
    .front {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #673AB7;
    color: white;
    width: 100%;
    height: 100%;
  }

  .back {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFC107;
    color: white;
    width: 100%;
    height: 100%;
  }
</style>

<div id="app">
  <vue-flip :active-hover="true" width="200px" height="50px">
    <template v-slot:front class="front">
      front
    </template>
    <template v-slot:back class="back">
      back
    </template>
  </vue-flip>
</div>

<script>
new Vue({
  components: {
    'vue-flip': vueFlip
  }
}).$mount('#app')
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
| height        | component height        | String  | True     |               |
| width         | component with          | String  | True     |               |
| transition    | component transition    | String  | False    | 0.5s          |
| v-model       | bind flip with variable | Boolean | False    |               |
