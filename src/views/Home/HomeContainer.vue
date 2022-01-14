<template>
  <div class="home-container">
    <Home />
    <Footer />
  </div>
</template>

<script>
import Home from "./Home.vue";
import Footer from "./Footer/Footer.vue";
export default {
  components: { Home, Footer },
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 570px;
  background-image: url("../../assets/Home/unsplash.jpg");
  background-size: cover;
}
</style>
