<template>
  <div class="contact-container">
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Footer from "../Home/Footer/Footer.vue";
import Contact from "../Contact/Contact.vue";
export default {
  components: { Contact, Footer },
};
</script>

<style>
.contact-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 570px;
  background-image: url("../../assets/Home/unsplash.jpg");
  background-size: cover;
}
</style>
