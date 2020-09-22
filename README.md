<p>
  <img alt="Test" src="https://github.com/kgrandemange/vue-flip/workflows/Test/badge.svg" />
  <a href="https://www.npmjs.com/package/vue-flip"><img src="https://badge.fury.io/js/vue-flip.svg" alt="npm badge"/></a>
  <a href="https://npmcharts.com/compare/vue-flip?minimal=true"><img src="https://img.shields.io/npm/dm/vue-flip.svg?style=flat" alt="NPM Downloads"/></a>
  <a href="https://opensource.org/licenses/MIT"><img src="http://img.shields.io/badge/license-MIT-brightgreen.svg" alt="MIT badge"/></a>
  <img alt="build & deploy docs" src="https://github.com/kgrandemange/vue-flip/workflows/build%20&%20deploy%20docs/badge.svg" />
</p>

# vue-flip

A component to flip elements.

<p align="center">
  <img src="https://raw.githubusercontent.com/kgrandemange/vue-flip/master/.github/screenshots/screen.gif" alt="vue-flip example"/>
</p>

## Demo

[Here](https://kgrandemange.github.io/vue-flip/)

## Installation

Vue.js 2 :

`npm i vue-flip@1.0.2`

`yarn add vue-flip@1.0.2`

Vue.js 3 :

`npm i vue-flip`

`yarn add vue-flip`

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
<vue-flip active-click></vue-flip>
```

or you can active on the hover with:

```vue
<vue-flip active-hover></vue-flip>
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
