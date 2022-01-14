<template>
  <Sidebar />
  <Home />
  <router-view />
</template>

<script>
import Home from "./views/Home/HomeContainer.vue";
import Sidebar from "./components/SideBar.vue";
export default {
  components: { Home, Sidebar },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  overflow-y: overlay;
  overflow-x: hidden;
  font-family: "Poppins Regular";
  color: black;
}

button.primary-btn {
  color: white;
  border: 2px solid linen;
  font-size: 12px;
  background-color: #1f2235;
}

button.btn {
  border-radius: 50px;
  padding: 14px 0;
  width: 160px;
  cursor: pointer;
  transition: 0.2s;
  font-family: "Poppins SemiBold ";
}

button.active {
  transform: translateY(2px);
}

button.primary-btn:hover {
  color: aliceblue;
  border: 2px solid #ff5823;
  background-color: #1f2235;
}

button.highlighted-btn {
  color: #fff;
  font-size: 12px;
  background-color: #ff5823;
}

button.highlighted-btn:hover {
  color: #1f2235;
  border: 2px solid #1f2235;
}

@media only screen and (max-width: 568px) {
  .highlighted-btn {
    z-index: -900;
  }
}
</style>
