<template>
  <i :class="['iconfont',`i-${icon}`,'g-icon',icon==='loading'?'loading':null]"></i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    icon: {
      type: String
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

@keyframes turning {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading {
  animation: turning 4s infinite linear;
}
</style>
