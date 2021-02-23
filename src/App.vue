<template>
  <div>

    <g-button></g-button>
  </div>
</template>

<script>
import Button from "./component/button/Button.vue"
export default {
  name: 'App',
  data () {
    return {

    };
  },
  components: {
    "g-button": Button
  },
  methods: {

  }
};
</script>

<style scoped lang="less">
@import './assets/css/reset.css';
@import './assets/css/base.css';
div {
  margin: 100px;
}
</style>
