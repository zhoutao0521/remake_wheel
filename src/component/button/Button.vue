<template>
  <button class="g-button">
    <g-icon v-if="icon"
            :icon="icon"
            :class="[iconPosition==='left'?'i-left':'i-right']"></g-icon>
    <div :class="['content',iconPosition==='left'?'c-left':'c-right']">
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
  & > .i-left {
    order: 1;
  }

  & > .c-left {
    order: 2;
  }

  & > .i-right {
    order: 2;
  }

  & > .c-right {
    order: 1;
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
