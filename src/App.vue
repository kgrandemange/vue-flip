<template>
  <div id="app">
    <h1>Simple Example (hover)</h1>
    <vue-flip :active-hover="true" width="200px" height="50px">
      <template v-slot:front class="front">
        front
      </template>
      <template v-slot:back class="back">
        back
      </template>
    </vue-flip>
    <pre v-highlightjs><code class="html">
      &lt;vue-flip :active-hover="true" width="200px" height="50px"&gt;
        &lt;template v-slot:front class="front"&gt;
          front
        &lt;/template&gt;
        &lt;template v-slot:back class="back"&gt;
          back
        &lt;/template&gt;
      &lt;/vue-flip&gt;
    </code></pre>

    <h1>Simple Example (click)</h1>
    <vue-flip :active-click="true" width="200px" height="50px">
      <template v-slot:front class="front">
        front
      </template>
      <template v-slot:back class="back">
        back
      </template>
    </vue-flip>
    <pre v-highlightjs><code class="html">
      &lt;vue-flip :active-hover="true" width="200px" height="50px"&gt;
        &lt;template v-slot:front class="front"&gt;
          front
        &lt;/template&gt;
        &lt;template v-slot:back class="back"&gt;
          back
        &lt;/template&gt;
      &lt;/vue-flip&gt;
    </code></pre>

    <hr/>

    <h1>Example with transition property</h1>
    <vue-flip :active-hover="true" width="200px" height="50px" transition="2s">
      <template v-slot:front class="front">
        front
      </template>
      <template v-slot:back class="back">
        back
      </template>
    </vue-flip>
    <pre v-highlightjs><code class="html">
      &lt;vue-flip :active-hover="true" width="200px" height="50px" transition="2s"&gt;
        &lt;template v-slot:front class="front"&gt;
          front
        &lt;/template&gt;
        &lt;template v-slot:back class="back"&gt;
          back
        &lt;/template&gt;
      &lt;/vue-flip&gt;
    </code></pre>
    <hr/>

    <h1>Flip card programmatically</h1>
    <vue-flip :active-hover="true" width="200px" height="50px" class="simple-test" v-model="model">
      <template v-slot:front class="front">
        front
      </template>
      <template v-slot:back class="back">
        back
      </template>
    </vue-flip>
    <div style="margin: 10px">
      <span style="margin-inline-end: 10px">{{ model }}</span>
      <button @click="model=!model">Click</button>
    </div>
    <pre v-highlightjs><code class="html">
      &lt;vue-flip :active-hover="true" width="200px" height="50px" class="simple-test" v-model="model"&gt;
      &lt;template v-slot:front class="front"&gt;
        front
      &lt;/template&gt;
      &lt;template v-slot:back class="back"&gt;
        back
      &lt;/template&gt;
    &lt;/vue-flip&gt;
      &lt;div style="margin: 10px"&gt;
        &lt;span style="margin-inline-end: 10px"&gt;{{ model }}&lt;/span&gt;
        &lt;button @click="model=!model"&gt;Click&lt;/button&gt;
      &lt;/div&gt;
      &lt;/code&gt;&lt;/pre&gt;
      &lt;hr/&gt;

      &lt;h1&gt;Flip one time&lt;/h1&gt;
      &lt;vue-flip v-model="model2" class="simple-test" width="20%" height="50px"&gt;
        &lt;template v-slot:front class="front"&gt;
          &lt;div style="display:flex; align-items: center; justify-content: center; height:100%; width:100%" @click="handleClick"&gt;disable me!&lt;/div&gt;
        &lt;/template&gt;
        &lt;template v-slot:back class="back"&gt;
          back
        &lt;/template&gt;
      &lt;/vue-flip&gt;
    </code></pre>
  </div>
</template>

<script>
  import vueFlip from './components/Flip'

  export default {
    name: 'app',
    components: {
      vueFlip
    },
    data: () => {
      return {
        model: false,
        model2: false,
        model3: false
      }
    },
    methods: {
      handleClick () {
        this.model2 = true
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  :root {
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-weight: 200;
  }

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
