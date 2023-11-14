<template>
  <NavBar />
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"

export default {
  components:{
    NavBar,
  }
}
</script>
<style lang="scss">
body{
  background-image: url(./assets/images/主界面.jpg);
  background-size: cover;
  color:white;
}
</style>
