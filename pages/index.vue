<template>
  <div class="wrapper">
    <side-bar :background-color="sidebarBackground" short-title="Argon" title="Argon">
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'หน้าแรก',
            icon: 'ni ni-tv-2 text-primary',
            path: '/dashboard',
          }"
        />
        <sidebar-item
          :link="{
            name: 'แบนเนอร์',
            icon: 'ni ni-album-2 text-primary',
            path: '/banners',
          }"
        />
        <sidebar-item
          :link="{
            name: 'คอนเสิร์ต',
            icon: 'ni ni-satisfied text-primary',
            path: '/concerts',
          }"
        />
        <sidebar-item
          :link="{
            name: 'โปรโมชั่น',
            icon: 'ni ni-notification-70 text-primary',
            path: '/dashboard',
          }"
        />
        <sidebar-item
          :link="{
            name: 'สินค้า',
            icon: 'ni ni-basket text-primary',
            path: '/dashboard',
          }"
        />
        <sidebar-item
          :link="{
            name: 'ข่าวสาร',
            icon: 'ni ni-bullet-list-67 text-primary',
            path: '/dashboard',
          }"
        />
        <sidebar-item
          :link="{
            name: 'บทความ',
            icon: 'ni ni-collection text-primary',
            path: '/articles',
          }"
        />
        <sidebar-item
          :link="{
            name: 'แท็ก',
            icon: 'ni ni-tag text-primary',
            path: '/tags',
          }"
        />
        <sidebar-item
          :link="{
            name: 'ผู้ใช้งาน',
            icon: 'ni ni-user-run text-primary',
            path: '/users',
          }"
        />
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <headernavbar />
      <div>
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <nuxt />
        </fade-transition>
        <gmmfooter v-if="!$route.meta.hideFooter"></gmmfooter>
      </div>
    </div>
  </div>
</template>
<script>
// import Logo from '~/components/Logo.vue'

export default {
  components: {
    // Logo,
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
