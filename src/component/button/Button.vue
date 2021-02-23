<template>
  <button class="g-button"
          :class="{[`icon-${iconPosition}`]:!!icon}">
    <g-icon v-if="icon"
            :icon="icon"
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
    }
    .content {
      order: 2;
    }
  }
  &.icon-right {
    .icon {
      order: 2;
    }
    .content {
      order: 1;
    }
  }
}

.g-button:hover {
  border: 1px solid var(--border-color-hover);
}

.g-button:active {
  background-color: var(--button-active-bg);
}

.g-button:focus {
  outline: none;
}
</style>
