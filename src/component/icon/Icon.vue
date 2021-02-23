<template>
  <i :class="['iconfont',`i-${icon}`,'g-icon']"></i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    icon: {
      type: String,
      default: "1",
      validator: value => {
        console.log(value);
        return true;
      }
    }
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
.g-icon {
  font-size: 1rem;
}
</style>
