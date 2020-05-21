<template lang="pug">
  button(
    :type="type"
    :class="classes"
    :disabled="disabled" 
  )
    span(v-if="icon || iconStart").btn__icon
      SvgIcon(:icon="icon || iconStart")
    span(v-if="showText").btn__text
      slot
    span(v-if="iconEnd").btn__icon
      SvgIcon(:icon="iconEnd")
</template>

<script>
import SvgIcon from "./svg-icons/svg-icons.vue";

export default {
  props: {
    color: {
      type: String,
      default: "dark",
      validator: (value) => ["dark"].includes(value),
    },
    size: {
      type: String,
      default: "medium",
      validator: (value) => ["medium"].includes(value),
    },
    icon: {
      type: String,
      default: "",
      validator: (value) => ["", "arrow-left", "arrow-right"].includes(value),
    },
    iconStart: {
      type: String,
      default: "",
      validator: (value) => ["", "arrow-left", "arrow-right"].includes(value),
    },
    iconEnd: {
      type: String,
      default: "",
      validator: (value) => ["", "arrow-left", "arrow-right"].includes(value),
    },
    type: {
      type: String,
      default: "button",
      validator: (value) => ["button", "submit", "reset"].includes(value),
    },
    onlyIcon: {
      type: Boolean,
      default: false,
    },
    rounded: Boolean,
    plain: Boolean,
    disabled: Boolean,
  },
  components: {
    SvgIcon,
  },
  computed: {
    classes() {
      const classes = ["btn"];

      if (this.onlyIcon && this.rounded) {
        classes.push("btn--rounded");
      }

      if (this.onlyIcon && this.size) {
        classes.push(`btn--${this.size}`);
      }

      if (this.icon || this.iconStart || this.iconEnd) {
        const icon = this.icon || this.iconStart || this.iconEnd;

        classes.push(`btn--${icon}`);
      }

      if (this.plain) {
        classes.push("btn--plain");
      }

      return classes.join(" ");
    },
    showText() {
      return !this.onlyIcon && !!this.$slots.default;
    },
  },
};
</script>

<style lang="postcss">
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  transition: color 0.3s ease-in;
  border: 1px solid currentColor;
  padding: 8px 15px;

  & {
    .btn__icon + .btn__text,
    .btn__text + .btn__icon {
      margin-left: 0.5rem;
    }
  }

  &__icon {
    display: flex;
    position: relative;
    width: 10px;
    height: auto;
    justify-content: center;
  }
}

&:disabled {
  border-color: rgba(currentColor, 0.9);
  cursor: unset;

  & .btn__icon {
    color: rgba(currentColor, 0.9);
  }
}

.btn {
  &--colorDark {
    color: #414b63;
  }
}

.btn {
  &--plain {
    border-color: transparent;
  }

  &--rounded {
    border-radius: 100%;
    padding: 8px;
  }

  &--medium {
    width: 50px;
    height: 50px;
  }
}
</style>
