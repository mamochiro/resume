<template>
  <div>
    <base-header
      class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
      :style="
        `min-height: 600px; background-image: url(${imgCover}); background-size: cover; background-position: center top;`
      "
    >
      <!-- Mask -->
      <span class="mask bg-gradient-success opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-7 col-md-10">
            <h1 class="display-2 text-white">Hello Mark Kie</h1>
            <p class="text-white mt-0 mb-5">
              This is your profile page. You can see the progress you've made with your work and
              manage your projects or assigned tasks
            </p>
            <!-- <a href="#!" class="btn btn-info">Edit profile</a> -->
          </div>
        </div>
      </div>
    </base-header>
    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style></style>
