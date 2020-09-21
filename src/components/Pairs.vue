<template>
  <div class="pairs">
    <h1>Use case: Pairs</h1>
      <vue-flip v-for="(item, $index) in deck" :key="$index" width="120px" height="200px" class="card" v-model="item.flipped" @click="handleClick(item)">
      <template v-slot:front>
        <div :class="{ 'found': item.found }" class="front">
          {{ item.found ? '✔️' : '?' }}
        </div>
      </template>
      <template v-slot:back>
        {{ item.value }}
      </template>
    </vue-flip>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VueFlip from './Flip.vue'

interface Card {
  value: string
  flipped: boolean
  found: boolean
}

let i = 0
export default defineComponent({
  name: 'Pairs',
  components: {
    VueFlip
  },
  data () {
    return {
      deck: [] as Array<Card>,
      cardSelected: [] as Array<Card>
    }
  },
  created () {
    const alphabetCharacters = [...Array(5)].map(() => ( i += 1).toString(36).toUpperCase(), i = 9)

    this.deck = [...alphabetCharacters, ...alphabetCharacters].map(el => {
      return {
        value: el,
        flipped: false,
        found: false
      }
    }).sort(() => 0.5 - Math.random())
  },
  methods: {
    handleClick (card: Card) {
      if (!card.found && !card.flipped) {
        if (this.cardSelected.length < 2) {
          card.flipped = true
          this.cardSelected.push(card)

          if (this.cardSelected.length === 2) {
            setTimeout(() => {
              this.cardSelected.map(el => el.flipped = false)

              if (this.cardSelected[0].value === card.value) {
                this.cardSelected[0].found = true
                card.found = true
              }

              this.cardSelected = []
            }, 1000)
          }
        }
      }
    }
  }
})
</script>

<style scoped>
  .pairs {
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

  .font {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .front.found {
    background-color: green;
  }
</style>