<template>
  <div>
    <header>
      <h1>Vue Flip</h1>
      <h2>A component to flip elements</h2>
    </header>
    <section>
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
        &lt;vue-flip :active-click="true" width="200px" height="50px"&gt;
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

      <hr />

      <pairs />

      <hr />

      <flip-cards />
    </section>
  </div>
</template>

<script>
  import vueFlip from './components/Flip'
  import Pairs from './components/Pairs'
  import FlipCards from './components/FlipCards'

  export default {
    name: 'app',
    components: {
      vueFlip,
      Pairs,
      FlipCards
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
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');

  :root {
    font-family: 'Open Sans', sans-serif;
  }

  body {
    margin: 0;
  }

  header {
    margin: 0;
    background: linear-gradient(to right, #673AB7, #FFC107);
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  header h1, header h2 {
    margin: 0;
    color: white;
  }

  section {
    margin: 1rem;
  }

  h1, h2 {
    font-weight: 300;
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
