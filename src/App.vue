<template>
  <div>
    <header>
      <h1>Vue Flip</h1>
      <h2>A component to flip elements</h2>
    </header>
    <section>
      <h1>Simple Example (hover)</h1>
      <VueFlip active-hover width="200px" height="50px">
        <template v-slot:front class="front"> front </template>
        <template v-slot:back class="back"> back </template>
      </VueFlip>
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
      <VueFlip active-click width="200px" height="50px">
        <template v-slot:front class="front"> front </template>
        <template v-slot:back class="back"> back </template>
      </VueFlip>
      <pre v-prism>
        <code>
        <div :active-click="true" width="200px" height="50px">
          <p class="front">
            front
          </p>
          <p class="back">
            back
          </p>
        </div>
        </code>
      </pre>

      <h1>Simple Example (click & hover)</h1>
      <VueFlip :active-click="true" :activeHover="true" width="200px" height="50px">
        <template v-slot:front class="front"> front </template>
        <template v-slot:back class="back"> back </template>
      </VueFlip>
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

      <hr />

      <h1>Horizontal Example</h1>
      <VueFlip :active-click="true" :activeHover="true" width="200px" height="50px" horizontal>
        <template v-slot:front class="front"> front </template>
        <template v-slot:back class="back">
          <span style="transform: rotate(180deg)"> back </span>
        </template>
      </VueFlip>
      <pre v-prism>
        <code>
        <div active-click width="200px" height="50px" :horizontal="true">
          <p class="front">
            front
          </p>
          <p class="back">
            <span>
              back
            </span>
          </p>
        </div>
        </code>
      </pre>
      <hr />

      <h1>Example with transition property</h1>
      <VueFlip active-hover width="200px" height="50px" transition="2s">
        <template v-slot:front class="front"> front </template>
        <template v-slot:back class="back"> back </template>
      </VueFlip>
      <pre v-prism>
        <code>
        <div :active-hover="true" width="200px" height="50px" transition="2s">
          <p class="front">
            front
          </p>
          <p class="back">
            back
          </p>
        </div>
        </code>
      </pre>
      <hr />

      <h1>Flip card programmatically</h1>
      <VueFlip active-click width="200px" height="50px" class="simple-test" v-model="model">
        <template v-slot:front class="front"> front </template>
        <template v-slot:back class="back"> back </template>
      </VueFlip>
      <div style="margin: 10px">
        <span style="margin-inline-end: 10px">{{ model }}</span>
        <button @click="model = !model">Click</button>
      </div>
      <pre v-prism>
        <code>
        <div :active-hover="true" width="200px" height="50px" class="simple-test" model="model">
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

      <hr />

      <h1>Flip one time</h1>
      <VueFlip v-model="model2" class="simple-test" width="20%" height="50px">
        <template v-slot:front class="front">
          <span style="
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100%;
              width: 100%;
            " @click="handleClick">disable me!</span>
        </template>
        <template v-slot:back class="back"> back </template>
      </VueFlip>

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

      <Pairs />

      <hr />

      <FlipCards />
    </section>
  </div>
</template>

<script lang="ts" setup>
import VueFlip from "./components/Flip.vue";
import Pairs from "./components/Pairs.vue";
import FlipCards from "./components/FlipCards.vue";
import { ref } from "vue";

const model = ref(false)
const model2 = ref(false)

const handleClick = () => {
  model2.value = true;
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap");

:root {
  font-family: "Open Sans", sans-serif;
}

body {
  margin: 0;
  min-width: 350px;
}

header {
  margin: 0;
  background: linear-gradient(to right, #673ab7, #ffc107);
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

header h1,
header h2 {
  margin: 0;
  color: white;
}

section {
  margin: 1rem;
}

h1,
h2 {
  font-weight: 300;
}

.front {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #673ab7;
  color: white;
  width: 100%;
  height: 100%;
}

.back {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffc107;
  color: white;
  width: 100%;
  height: 100%;
}
</style>
