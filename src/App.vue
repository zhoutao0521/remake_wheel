<template>
  <div class="app">
    <g-button></g-button>
    <g-button icon="setting">点击</g-button>
    <g-button icon="setting">点击</g-button>
    <g-button icon="setting"
              iconPosition="right">点击</g-button>
    <g-button iconPosition="left"
              :loading="loading"
              @click=" loading = !loading">
    </g-button>

    <g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button>其他</g-button>
      <g-button icon="right"
                iconPosition="right">下一页</g-button>
    </g-button-group>

  </div>
</template>

<script>
import Button from "./component/button/Button.vue"
import Icon from "./component/icon/Icon.vue";
import ButtonGroup from "./component/button/ButtonGroup.vue";
export default {
  name: 'App',
  data () {
    return {
      loading: true
    };
  },
  components: {
    "g-button": Button,
    "g-icon": Icon,
    'g-button-group': ButtonGroup
  },
  methods: {

  }
};
</script>

<style scoped lang="less">
@import './assets/css/reset.css';
@import './assets/css/base.css';
.app {
  margin: 100px;
}
</style>
