<template>
  <div class="portfolio-container">
    <div class="header">
      <h2>Portfolio</h2>
    </div>
    <section class="Portfolio">
      <Portfolio
        v-for="project in projects"
        :key="project.color"
        :project="project"
      />
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "../Home/Footer/Footer.vue";
import Portfolio from "../Portfolio/Portfolio.vue";
export default {
  components: { Portfolio, Footer },
  data() {
    return {
      projects: [
        {
          title: "Project One",
          color: "green",
          bgText: "Calculator",
          src: require("../../assets/green-shoe.png"),
        },
        {
          title: "Project Two",
          color: "blue",
          bgText: "Two",
          src: require("../../assets/blue-shoe.png"),
        },
        {
          title: "Project Three",
          color: "pink",
          bgText: "Three",
          src: require("../../assets/pink-shoe.png"),
        },
      ],
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.portfolio-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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
.Portfolio {
  display: flex;
  max-width: 1280px;
  padding: 25px;
  margin: 0 auto;
}
</style>
