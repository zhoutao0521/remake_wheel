<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ButtonGroup',
  data () {
    return {

    };
  },
  methods: {

  }
};
</script>

<style scoped lang="less">
.g-button-group {
  display: inline-flex;
  vertical-align: middle;

  .g-button {
    border-radius: 0;
  }

  & :not(:first-child) {
    margin-left: -1px;
  }

  & :first-child {
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
  }

  & :last-child {
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }
}
</style>
