<template>
  <div class="footer-container">
    <div class="footer-parent">
      <img src="../../../assets/Home/shape.png" alt="no internet connect" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-container {
  height: 17.8%;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.footer-parent {
  width: 100%;
  height: 100%;
  max-width: 1920px;
}

.footer-parent img {
  max-width: 100%;
  height: 130px;
}

@media only screen and (max-width: 1000px) {
  .footer-parent {
    display: flex;
    align-items: flex-end;
    height: 130px;
  }
}
</style>
