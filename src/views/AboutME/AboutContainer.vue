<template>
  <div class="about-container">
    <About />
    <Footer />
  </div>
</template>

<script>
import Footer from "../Home/Footer/Footer.vue";
import About from "../AboutME/AboutMe.vue";
export default {
  components: { About, Footer },
};
</script>

<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 570px;
  background-image: url("../../assets/Home/unsplash.jpg");
  background-size: cover;
}
</style>
