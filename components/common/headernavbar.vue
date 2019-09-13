<template>
  <base-nav id="navbar-main" class="navbar-top navbar-dark" :show-toggle-button="false" expand>
    <ul class="navbar-nav align-items-center d-none d-md-flex">
      <li class="nav-item dropdown">
        <base-dropdown class="nav-link pr-0">
          <div slot="title" class="media align-items-center">
            <div class="media-body ml-2 d-none d-lg-block">
              <span class="mb-0 text-sm  font-weight-bold">{{
                `${auth.data.firstName} ${auth.data.lastName}`
              }}</span>
            </div>
          </div>

          <template>
            <div class=" dropdown-header noti-title">
              <h6 class="text-overflow m-0">Welcome!</h6>
            </div>
            <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-single-02"></i>
              <span>My profile</span>
            </router-link>
            <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-settings-gear-65"></i>
              <span>Settings</span>
            </router-link>
            <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-calendar-grid-58"></i>
              <span>Activity</span>
            </router-link>
            <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-support-16"></i>
              <span>Support</span>
            </router-link>
            <div class="dropdown-divider"></div>
            <router-link to="/logout" class="dropdown-item">
              <i class="ni ni-user-run"></i>
              <span>Logout</span>
            </router-link>
          </template>
        </base-dropdown>
      </li>
    </ul>
  </base-nav>
</template>
<script>
export default {
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchQuery: '',
    }
  },
  computed: {
    auth() {
      return this.$store.state.auth.auth
    },
    isAuth() {
      return this.$store.state.auth.isAuth
    },
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false)
    },
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>
