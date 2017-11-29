<template>
  <div class="flip-container"
       :class="{ 'active-hover': activeHover, 'hover': hover }"
       :style="{ width: width, height: height }"
       @click="handlerHover">
    <div class="flipper"
         :style="cardStyle">
      <div class="front"
           :style="cardStyle">
        <slot name="front"></slot>
      </div>
      <div class="back"
           :style="cardStyle">
        <slot name="back"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'flip',
    props: {
      'activeClick': {
        type: Boolean,
        required: false,
        default: false
      },
      'activeHover': {
        type: Boolean,
        required: false,
        default: false
      },
      'width': {
        type: String,
        required: true
      },
      'height': String
    },
    data () {
      return {
        hover: false
      }
    },
    computed: {
      cardStyle () {
        let result = {}

        if (this.height) {
          result.height = this.height.includes('%') ? '100%' : this.height
        }

        if (this.width) {
          result.width = this.width.includes('%') ? '100%' : this.width
        }

        return result
      }
    },
    methods: {
      handlerHover () {
        if (this.activeClick) {
          this.hover = !this.hover
        }
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
