<template>
  <div>
    <!-- <test-hello></test-hello> -->
    <!-- <Hello></Hello>
    <Hello />
    <Aqq />
    <Aqq></Aqq>
    <Logo></Logo>
    <Logo /> -->
    <nav>
      <a href="#" @click="selectedComponent = 'About'">About</a>
      <a href="#" @click="selectedComponent = 'Service'">Service</a>
      <a href="#" @click="selectedComponent = 'Contact'">Contact</a>
    </nav>
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
// import Hello from '@/components/Hello.vue';
// import Aqq from '@/components/Aqq.vue';
import About from '@/components/About.vue';
import Service from '@/components/Service.vue';
import Contact from '@/components/Contact.vue';
  export default {
    // components:{
    //   'test-hello':Hello
    //   Hello:Hello
    //   Hello,
    //   Aqq,
    // }
    data(){
      return {
        selectedComponent:'About'
      }
    },
    components:{
      About,
      Service,
      Contact,
    },
  }
</script>

<style lang="scss" scoped>
  // @import "~bootstrap/scss/bootstrap";
</style>