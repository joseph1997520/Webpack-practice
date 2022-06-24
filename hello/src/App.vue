<template>
  <div>
    <!-- <test-hello></test-hello> -->
    <Hello></Hello>
    <Hello />
    <Aqq />
    <Aqq></Aqq>
    <Logo />
  </div>
</template>

<script>
import Hello from '@/components/Hello.vue';
import Aqq from '@/components/Aqq.vue';
  export default {
    components:{
      // 'test-hello':Hello
      // Hello:Hello
      Hello,
      Aqq,
    }
  }
</script>

<style lang="scss" scoped>

</style>