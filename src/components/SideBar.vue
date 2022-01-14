<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <span class="collapse-icon" @click="toggleSidebar"></span>
  </div>
</template>

<script>
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
export default {
  props: {},
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>

<style>
.sidebar {
  color: white;
  background-color: #2c3e50;
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  display: flex;
  transition: 0.3s ease;
  flex-direction: column;
}
</style>
