<template>
  <div class="contact-container">
    <div class="header">
      <h2>Contact Me</h2>
    </div>
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

.header {
  display: flex;
  justify-content: center;
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
