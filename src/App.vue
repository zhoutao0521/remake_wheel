<template>
  <div>
    <g-button></g-button>
    <g-button icon="setting">点击</g-button>
    <g-button icon="setting">点击</g-button>
    <g-button icon="setting"
              iconPosition="right">点击</g-button>
    <g-button iconPosition="left"
              :loading="loading"
              @click=" loading = !loading">
    </g-button>

  </div>
</template>

<script>
import Button from "./component/button/Button.vue"
import Icon from "./component/icon/Icon.vue";
export default {
  name: 'App',
  data () {
    return {
      loading: true
    };
  },
  components: {
    "g-button": Button,
    "g-icon": Icon
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
