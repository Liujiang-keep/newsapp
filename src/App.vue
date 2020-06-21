<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header";

  export default {
    components: {
      Header,
    },
  };
</script>
<style scoped>
  .container{
    margin: 30px auto;
  }
</style>
