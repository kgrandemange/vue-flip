<template>
  <div class="flip-container"
       :class="{ 'active-hover': activeHover, 'hover': hover }"
       :style="{ width: width, height: height }"
       @click="handlerHover"
       @mouseover="handlerMouseover"
       @mouseout="handlerMouseout"
  >
    <div
      class="flipper"
      :style="{ transition }"
    >
      <div class="front">
        <slot name="front" />
      </div>
      <div class="back">
        <slot name="back" />
      </div>
    </div>
  </div>
</template>

<script>
  import {createComponent, ref, watch} from '@vue/composition-api'
  export default createComponent({
    name: 'flip',
    props: {
      activeClick: {
        type: Boolean,
        required: false,
        default: false
      },
      activeHover: {
        type: Boolean,
        required: false,
        default: false
      },
      width: {
        type: String,
        required: true
      },
      height: {
        type: String,
        required: true
      },
      transition: {
        type: String,
        required: false,
        default: '0.5s'
      },
      value: {
        type: Boolean,
        required: false
      }
    },
    setup (props, { emit }) {
      const hover = ref(false)
      const handlerHover = () => {
        if (props.activeClick) {
          hover.value = !hover.value
          emit('input', hover.value)
        }
      }
      const handlerMouseout = () => {
        if (props.activeHover) {
          emit('input', false)
        }
      }
      const handlerMouseover = () => {
        if (props.activeHover) {
          emit('input', true)
        }
      }

      watch('value', () => {
        hover.value = props.value
      })

      return {
        hover,
        handlerHover,
        handlerMouseout,
        handlerMouseover
      }
    }
  })
</script>

<style>
  .flip-container {
    -webkit-perspective: 1000;
       -moz-perspective: 1000;
            perspective: 1000;
  }

  .flip-container.active-hover:hover .flipper,
  .flip-container.hover .flipper {
    -webkit-transform: rotateY(180deg);
       -moz-transform: rotateY(180deg);
            transform: rotateY(180deg);
  }

  .flipper {
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .front, .back {
    transform-style: preserve-3d; /* this fixed chrome issue*/
    -webkit-backface-visibility: hidden;
       -moz-backface-visibility: hidden;
            backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }

  .front {
    z-index: 2;
    -webkit-transform: rotateY(0);
       -moz-transform: rotateY(0);
            transform: rotateY(0);
  }

  .back {
    -webkit-transform: rotateY(180deg);
       -moz-transform: rotateY(180deg);
            transform: rotateY(180deg);
  }
</style>
