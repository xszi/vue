<template>
  <div class="home">
    <p><router-link to="/slot">slot</router-link></p>
    <p><router-link to="/echart">chart</router-link></p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
