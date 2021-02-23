<template>
  <div>
    {{name}}
    <g-button></g-button>
  </div>
</template>

<script>
import GButton from "./component/g-button.vue"
export default {
  name: 'App',
  data () {
    return {
      name: "lz"
    };
  },
  components: {
    "g-button": GButton
  },
  methods: {

  }
};
</script>

<style scoped lang="less">
@import './assets/css/reset.css';
div {
  background-color: pink;
}
</style>
