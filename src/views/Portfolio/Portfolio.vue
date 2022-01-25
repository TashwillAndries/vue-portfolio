<template>
  <div class="project">
    <div class="project-inner">
      <div class="project-image-wrap">
        <img :src="project.src" class="image" />
      </div>
      <div class="project-detail">
        <h2>{{ project.title }}</h2>
        <p>
          {{ project.description }}
        </p>
      </div>
    </div>
    <div class="buttons">
      <a class="button" :href="project.live">Live</a>
      <a class="button" :href="project.github">Github</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "project",
  props: ["project"],
};
</script>

<style scoped>
.project {
  flex: 1 1 33.333%;
  width: 100%;
  padding: 25px;
}
.project-inner {
  position: relative;
  padding: 25px;
  box-shadow: 0px 0px 16px rgba(255, 88, 35, 0.7);
}

.project-inner {
  background-color: rgba(54, 53, 59, 0.7);
}

.project-image-wrap .image {
  width: 100%;
  z-index: 0;
  filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
}

.project-text-wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 65px;
  bottom: 0;
  overflow: hidden;
}

.project-text-wrap h2 {
  color: #ff5823;
  font-size: 50px;
  font-weight: 900;
  opacity: 0.7;
  transform-origin: center;
}

.project-image-wrap {
  position: relative;
  transform-origin: center;
}
.project-detail {
  padding: 25px;
  margin: 0px -25px -25px;
}

.project-detail h2 {
  font-size: 24px;
  color: #9b9a9c;
  font-weight: 700;
  margin-bottom: 4px;
}

.project-detail p {
  font-size: 14px;
  line-height: 1.5;
  font-weight: 300;
  color: #9b9a9c;
}

.buttons {
  display: flex;
  justify-content: space-around;
  background-color: rgba(54, 53, 59, 0.7);
  box-shadow: 0px 0px 16px rgba(255, 88, 35, 0.7);
}

.button {
  width: 120px;
  padding: 11px 0;
  margin-top: 5px;
  border-radius: 50px;
  border: 2px solid #ff5823;
  background-color: rgba(54, 53, 59, 0.7);
  text-decoration: none;
  color: white;
}
</style>
