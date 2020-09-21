<template>
  <div>
    <header>
      <h1>Vue Flip</h1>
      <h2>A component to flip elements</h2>
    </header>
    <section>
      <h1>Simple Example (hover)</h1>
      <vue-flip active-hover width="200px" height="50px">
        <template v-slot:front class="front">
          front
        </template>
        <template v-slot:back class="back">
          back
        </template>
      </vue-flip>
      <pre v-prism>
        <code>
        <div :active-hover="true" width="200px" height="50px">
          <p class="front">
            front
          </p>
          <p class="back">
            back
          </p>
        </div>
        </code>
      </pre>

      <h1>Simple Example (click)</h1>
      <vue-flip active-click width="200px" height="50px">
        <template v-slot:front class="front">
          front
        </template>
        <template v-slot:back class="back">
          back
        </template>
      </vue-flip>
      <pre v-prism>
        <code>
        <div active-click width="200px" height="50px">
          <p class="front">
            front
          </p>
          <p class="back">
            back
          </p>
        </div>
        </code>
      </pre>

      <hr/>

      <h1>Example with transition property</h1>
      <vue-flip active-hover width="200px" height="50px" transition="2s">
        <template v-slot:front class="front">
          front
        </template>
        <template v-slot:back class="back">
          back
        </template>
      </vue-flip>
      <pre v-prism>
        <code>
        <div active-hover width="200px" height="50px" transition="2s">
          <p class="front">
            front
          </p>
          <p class="back">
            back
          </p>
        </div>
        </code>
      </pre>
      <hr/>

      <h1>Flip card programmatically</h1>
      <vue-flip active-click width="200px" height="50px" class="simple-test" v-model="model">
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
      <pre v-prism>
        <code>
        <div active-hover width="200px" height="50px" class="simple-test" model="model">
          <p class="front">
            front
          </p>
          <p class="back">
            back
          </p>
        </div>
        <div style="margin: 10px">
          <span style="margin-inline-end: 10px">{{ model }}</span>
          <button @click="model=!model">Click</button>
        </div>
        </code>
      </pre>

      <hr/>

      <h1>Flip one time</h1>
      <vue-flip v-model="model2" class="simple-test" width="20%" height="50px">
        <template v-slot:front class="front">
          <span style="display:flex; align-items: center; justify-content: center; height:100%; width:100%" @click="handleClick">disable me!</span>
        </template>
        <template v-slot:back class="back">
          back
        </template>
      </vue-flip>

      <pre v-prism>
        <code>
        <div model="model2" class="simple-test" width="20%" height="50px">
          <p class="front">
            <span style="display:flex; align-items: center; justify-content: center; height:100%; width:100%" @click="handleClick">disable me!</span>
          </p>
          <p class="back">
            back
          </p>
        </div>
        </code>
      </pre>

      <pre v-prism="'javascript'">
        <code>
          export default {
            methods: {
              handleClick () {
                this.model2 = true
              }
            }
          }
        </code>
      </pre>

      <hr />

      <pairs />

      <hr />

      <flip-cards />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import vueFlip from './components/Flip.vue'
import Pairs from './components/Pairs.vue'
import FlipCards from './components/FlipCards.vue'

export default defineComponent({
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
})
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');

  :root {
    font-family: 'Open Sans', sans-serif;
  }

  body {
    margin: 0;
    min-width: 350px;
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
