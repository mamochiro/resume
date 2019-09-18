<template>
  <div class="wrapper">
    <side-bar :background-color="sidebarBackground" short-title="Argon" title="Argon">
      <template slot="links">
        <sidebar-item
          :link="{ name: 'About Me', icon: 'ni ni-single-02 text-yellow', path: '/' }"
        />
        <sidebar-item
          :link="{ name: 'Skills', icon: 'ni ni-chart-bar-32 text-success', path: '/skills' }"
        />
        <sidebar-item
          :link="{ name: 'Experience', icon: 'ni ni-archive-2 text-primary', path: '/experience' }"
        />
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
import { FadeTransition } from 'vue2-transitions'
import DashboardNavbar from './DashboardNavbar.vue'
import ContentFooter from './ContentFooter.vue'
export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    FadeTransition,
  },
  data() {
    return {
      sidebarBackground: 'vue', // vue|blue|orange|green|red|primary
    }
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false)
      }
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
