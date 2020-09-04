<template>
  <base-nav id="navbar-main" class="navbar-top navbar-dark" :show-toggle-button="false" expand>
    <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
      <div class="form-group mb-0">
        <!-- <base-input
          placeholder="Search"
          class="input-group-alternative"
          alternative=""
          addon-right-icon="fas fa-search"
        >
        </base-input> -->
      </div>
    </form>
    <ul class="navbar-nav align-items-center d-none d-md-flex">
      <li class="nav-item dropdown">
        <base-dropdown class="nav-link pr-0">
          <div slot="title" class="media align-items-center">
            <span class="avatar avatar-sm rounded-circle">
              <img alt="Image placeholder" :src="imgProfile" />
            </span>
            <div class="media-body ml-2 d-none d-lg-block">
              <span class="mb-0 text-sm  font-weight-bold">Sarawut Nawawisitkul</span>
            </div>
          </div>

          <template>
            <router-link to="/" class="dropdown-item">
              <i class="ni ni-single-02"></i>
              <span>My Infomation</span>
            </router-link>
            <router-link to="/skills" class="dropdown-item">
              <i class="ni ni-settings-gear-65"></i>
              <span>Skills</span>
            </router-link>
            <router-link to="/experience" class="dropdown-item">
              <i class="ni ni-calendar-grid-58"></i>
              <span>Experience</span>
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
      imgProfile: require('~/assets/img/profile/profile_2.jpg'),
    }
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
