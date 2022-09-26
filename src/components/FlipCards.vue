<template>
  <div class="flip-cards">
    <h1>Use case: Flip Cards</h1>
    <vue-flip v-for="item in items" v-model="item.flip" :key="item.value" width="120px" height="200px" class="card"
      active-click>
      <template v-slot:front>
        <div class="front">
          {{ item.value }}
        </div>
      </template>
      <template v-slot:back>
        😀
      </template>
    </vue-flip>
    <button @click="flipCards">Flip Cards</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import VueFlip from './Flip.vue'

const items = ref(Array.from(Array(10), (_, x) => {
  return {
    value: x,
    flip: false
  }
}))

const flipCards = () => {
  let index = 0
  const interval = setInterval(() => {
    items.value[index].flip = !items.value[index].flip
    index++

    if (index >= items.value.length) {
      clearInterval(interval)
    }
  }, 100)
}
</script>

<style scoped>
.flip-cards {
  display: flex;
  flex-wrap: wrap;
}

h1 {
  width: 100%;
}

.card {
  margin: 10px;
  cursor: pointer;
  user-select: none;
  font-size: 4rem;
}

button {
  height: max-content;
}
</style>
