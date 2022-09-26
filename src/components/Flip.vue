<script lang="ts">
import { defineComponent, h } from "vue";
import {
  validateWidth,
  validateHeight,
  validateTransitionDuration,
} from "../assets/js/validator";

type cssObject = {
  [key: string]: string | number;
};

const backAndFrontStyle: cssObject = {
  'transform-style': 'preserve-3d',
  /* this fixed chrome issue*/
  backfaceVisibility: 'hidden',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
}

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
  computed: {
    computedFlippterStyle(): cssObject {
      const result = {
        transition: '0.6s',
        'transform-style': 'preserve-3d',
        position: 'relative',
        width: '100%',
        height: '100%',
        'transition-duration': this.transition,
        transform: '',
      }

      if (this.hover && this.horizontal) {
        result.transform = 'rotateX(180deg)'
      } else if (this.hover) {
        result.transform = 'rotateY(180deg)'
      }

      return result
    },
    computedBackStyle(): cssObject {
      return {
        ...backAndFrontStyle,
        transform: 'rotateY(180deg)',
      }
    },
    computedFrontStyle(): cssObject {
      return {
        ...backAndFrontStyle,
        'z-index': 2,
        transform: 'rotateY(0deg)',
      }
    },
  },
  render() {
    return h(
      "div",
      {
        class: `${this.activeHover ? "active-hover " : ""}${this.hover ? "hover" : ""
          } ${this.horizontal ? "horizontal" : ""}`,
        style: `perspective: 1000; width: ${this.width}; height: ${this.height}`,
        onClick: this.handleClick,
        onMouseenter: this.handleMouseEnter,
        onMouseleave: this.handleMouseLeave,
      },
      h(
        "div",
        {
          class: "flipper",
          style: this.computedFlippterStyle,
        },
        [
          h(
            "div",
            {
              class: "front",
              style: this.computedFrontStyle,
            },
            this.$slots.front ? this.$slots.front() : ""
          ),
          h(
            "div",
            {
              class: "back",
              style: this.computedBackStyle,
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
