<template>
  <div class="portfolio-container">
    <Portfolio />
    <Footer />
  </div>
</template>

<script>
import Footer from "../Home/Footer/Footer.vue";
import Portfolio from "../Portfolio/Portfolio.vue";
export default {
  components: { Portfolio, Footer },
};
</script>

<style>
.portfolio-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 570px;
  background-image: url("../../assets/Home/unsplash.jpg");
  background-size: cover;
}
</style>
