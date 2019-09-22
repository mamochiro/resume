<template>
  <div class="wrapper">
    <side-bar
      :background-color="sidebarBackground"
      :logo="imgProfile"
      short-title="Argon"
      title="Argon"
    >
      <template slot="links">
        <sidebar-item
          :link="{ name: 'About Me', icon: 'ni ni-single-02 text-yellow', path: '/' }"
        />
        <sidebar-item
          :link="{ name: 'Skills', icon: 'ni ni-chart-bar-32 text-success', path: '/skills' }"
        />
        <sidebar-item
          :link="{
            name: 'Work Experience',
            icon: 'ni ni-archive-2 text-primary',
            path: '/experience',
          }"
        />
      </template>
      <!-- Heading -->
      <template slot="after-links">
        <h6 class="navbar-heading text-muted">Contract</h6>
        <!-- Navigation -->
        <ul class="navbar-nav mb-md-3">
          <li class="nav-item">
            <a class="nav-link" href="https://www.facebook.com/Mark.Sarawut">
              <i class="fa fa-facebook-square"></i>Facebook
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://line.me/ti/p/mamochiro">
              <i class="ni ni-single-02"></i>Line
            </a>
          </li>
        </ul>
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
      imgProfile: require('~/assets/img/theme/profile.jpg'),
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
