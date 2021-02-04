<script lang="ts">
import { defineComponent, h } from "vue";
import {
  validateWidth,
  validateHeight,
  validateTransitionDuration,
} from "../assets/js/validator";

export default defineComponent({
  name: "flip",
  props: {
    activeClick: {
      type: Boolean,
      required: false,
      default: false,
    },
    activeHover: {
      type: Boolean,
      required: false,
      default: false,
    },
    horizontal: {
      type: Boolean,
      required: false,
      default: false,
    },
    width: {
      type: String,
      required: true,
      validator: validateWidth,
    },
    height: {
      type: String,
      required: true,
      validator: validateHeight,
    },
    transition: {
      type: String,
      required: false,
      default: "0.5s",
      validator: validateTransitionDuration,
    },
    modelValue: {
      type: Boolean,
      required: false,
    },
  },
  render() {
    return h(
      "div",
      {
        class: `flip-container ${this.activeHover ? "active-hover " : ""}${
          this.hover ? "hover" : ""
        } ${this.horizontal ? "horizontal" : ""}`,
        style: `width: ${this.width}; height: ${this.height}`,
        onClick: this.handleClick,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
      },
      h(
        "div",
        {
          class: "flipper",
          style: `transition-duration: ${this.transition}`,
        },
        [
          h(
            "div",
            {
              class: "front",
            },
            this.$slots.front ? this.$slots.front() : ""
          ),
          h(
            "div",
            {
              class: "back",
            },
            this.$slots.back ? this.$slots.back() : ""
          ),
        ]
      )
    );
  },
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    handleClick() {
      if (this.activeClick) {
        this.hover = !this.hover;
        this.$emit("update:modelValue", this.hover);
      }
    },
    handleMouseLeave() {
      if (this.activeHover) {
        this.hover = !this.hover;
        this.$emit("update:modelValue", this.hover);
      }
    },
    handleMouseEnter() {
      if (this.activeHover) {
        this.hover = !this.hover;
        this.$emit("update:modelValue", this.hover);
      }
    },
  },
  mounted() {
    if (this.modelValue) {
      this.hover = this.modelValue;
    }
  },
  watch: {
    modelValue(value) {
      this.hover = value;
    },
  },
});
</script>

<style>
.flip-container {
  perspective: 1000;
}

.flip-container.hover .flipper {
  transform: rotateY(180deg);
}

.flip-container.hover.horizontal .flipper {
  transform: rotateX(180deg);
}

.flipper {
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
  width: 100%;
  height: 100%;
}

.front,
.back {
  transform-style: preserve-3d; /* this fixed chrome issue*/
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

.front {
  z-index: 2;
  transform: rotateY(0);
}

.back {
  transform: rotateY(180deg);
}
</style>
