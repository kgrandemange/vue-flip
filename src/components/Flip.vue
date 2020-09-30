<script lang="ts">
import { defineComponent, h } from 'vue'
import { validateWidth, validateHeight } from '../assets/js/validator'

export default defineComponent({
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
      required: true,
      validator: validateWidth
    },
    height: {
      type: String,
      required: true,
      validator: validateHeight
    },
    transition: {
      type: String,
      required: false,
      default: '0.5s'
    },
    modelValue: {
      type: Boolean,
      required: false
    }
  },
  render () {
    return h(
      'div',
      {
        class: `flip-container ${this.activeHover ? 'active-hover ' : ''}${this.hover ? 'hover' : ''}`,
        style: `width: ${this.width}; height: ${this.height}`,
        onClick: this.handleClick,
        onMouseOver: this.handleMouseover,
        onMouseOut: this.handleMouseout,
      },
      h(
        'div', {
          class: 'flipper',
          style: `transition: ${this.transition}`
        },
        [
          h(
            'div',
            {
              class: 'front'
            },
            this.$slots.front ? this.$slots.front() : ''
          ),
          h(
            'div',
            {
              class: 'back'
            },
            this.$slots.back ? this.$slots.back() : ''
          )
        ]
      )
    )
  },
  data () {
    return {
      hover: false
    }
  },
  methods: {
    handleClick () {
      if (this.activeClick) {
        this.hover = !this.hover
        this.$emit('update:modelValue', this.hover)
      }
    },
    handleMouseout () {
      if (this.activeHover) {
        this.$emit('update:modelValue', false)
      }
    },
    handleMouseover () {
      if (this.activeHover) {
        this.$emit('update:modelValue', true)
      }
    }
  },
  mounted () {
    if (this.modelValue) {
      this.hover = this.modelValue
    }
  },
  watch: {
    modelValue (value) {
      this.hover = value
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
