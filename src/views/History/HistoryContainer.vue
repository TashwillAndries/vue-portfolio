<template>
  <div class="history-container">
    <div class="header">
      <h2>History</h2>
    </div>
    <History />
    <Testimonials />
    <Footer />
  </div>
</template>

<script>
import Footer from "../Home/Footer/Footer.vue";
import History from "../History/History.vue";
import Testimonials from "./Testimonial.vue";
export default {
  components: { Testimonials, History, Footer },
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
.header {
  padding-bottom: 50px;
  padding-top: 25px;
  padding-right: 0px;
  padding-left: 0px;
  margin-right: auto;
  margin-left: auto;
}

.header h2 {
  font-size: 25px;
  box-shadow: -39px -8px 0px -1px rgba(255, 88, 35, 0.7) inset;
}
</style>
