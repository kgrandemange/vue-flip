<template>
  <div class="flip-container" :class="{ 'active-hover': activeHover, 'hover': hover }" @click="handlerHover">
    <div class="flipper">
      <div class="front">
        <slot name="front"></slot>
      </div>
      <div class="back">
        <slot name="back"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'flip',
    props: ['active-click', 'active-hover'],
    data () {
      return {
        hover: false
      }
    },
    methods: {
      handlerHover () {
        this.hover = !this.hover
      }
    }
  }
</script>

<style>
  .flip-container {
    perspective: 1000;
  }

  .flip-container.active-hover:hover .flipper,
  .flip-container.hover .flipper {
    transform: rotateY(180deg);
  }

  .flip-container, .front, .back {
    width: 320px;
    height: 427px;
  }

  .flipper {
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
  }

  .front, .back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }

  .front {
    z-index: 2;
  }

  .back {
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
</style>
