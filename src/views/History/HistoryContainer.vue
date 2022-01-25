<template>
  <div class="history-container">
    <History />
    <Footer />
  </div>
</template>

<script>
import Footer from "../Home/Footer/Footer.vue";
import History from "../History/History.vue";
export default {
  components: { History, Footer },
};
</script>

<style scoped>
.history-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 570px;
  background-image: url("../../assets/Home/unsplash.jpg");
  background-size: cover;
}
</style>
