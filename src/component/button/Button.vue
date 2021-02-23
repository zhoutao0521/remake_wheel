<template>
  <button class="g-button">
    <slot>button</slot>
  </button>
</template>

<script>
export default {
  name: 'g-button',
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
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background-color: var(--button-bg);
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
