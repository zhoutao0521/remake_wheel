<template>
  <button class="g-button"
          :class="{[`icon-${iconPosition}`]:!!icon}"
          @click="$emit('click')">
    <g-icon v-if="icon && !loading"
            :name="icon"
            class="icon"></g-icon>
    <g-icon v-if="loading"
            name="loading"
            class="icon"></g-icon>
    <div class="content">
      <slot>button</slot>
    </div>
  </button>
</template>

<script>
import Icon from "../icon/Icon.vue";
export default {
  name: 'g-button',
  props: {
    icon: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: String,
      default: "left",
      validator: value => {
        return value === "right" || value === "left"
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  components: {
    "g-icon": Icon
  },
  data () {
    return {

    };
  },
  methods: {

  }
};
</script>

<style scoped lang="less">
.g-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background-color: var(--button-bg);
  &.icon-left {
    .icon {
      order: 1;
      margin-right: 0.1rem;
    }
    .content {
      order: 2;
    }
  }
  &.icon-right {
    .icon {
      order: 2;
      margin-left: 0.1rem;
    }
    .content {
      order: 1;
    }
  }
}

.g-button:hover {
  position: relative;
  z-index: 1;
  border: 1px solid var(--border-color-hover);
}

.g-button:active {
  background-color: var(--button-active-bg);
}

.g-button:focus {
  outline: none;
}
</style>
