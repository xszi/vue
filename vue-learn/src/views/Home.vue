<template>
  <div class="home">
    <p>练习目录如下：</p>
    <p><router-link to="/slot">slot</router-link></p>
    <p><router-link to="/echart">chart</router-link></p>
    <p><router-link to="/demohome">vue实战</router-link></p>
    <p><router-link to="/transfer">transfer树形穿梭框</router-link></p>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>
