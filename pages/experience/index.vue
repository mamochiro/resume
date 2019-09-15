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
        <div class="col-xl-6 order-xl-2 mb-5 mb-xl-0">
          <div class="card card-profile shadow">
            <div class="card-body pt-0 pt-md-4">
              <div class="text-center">
                <h3>SPOTON LABORATORIES CO. , LTD</h3>
                <div class="h5 font-weight-300">
                  <i class="ni location_pin mr-2"></i>Phuket,Thailand
                </div>
                <div class="h5 mt-4">SOFTWARE DEVELOPMENT | AUG 2017 - DEC 2017 (Internship)</div>
                <hr class="my-4" />
                <div class="text-left">
                  <ul>
                    <li>
                      Report the access data from users in the information system of the center.
                    </li>
                    <li>
                      Update the information needed to run a Synze media company (basic information
                      that requires images, videos, and more)
                    </li>
                    <li>
                      The engine to load bit-torrent files using Node.Js technology used in the
                      development
                    </li>
                    <li>
                      Make a web service that works with the server to load torrent files, using
                      Node. Js technology
                    </li>
                  </ul>
                </div>
                <!-- <a href="#">Show more</a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 order-xl-2 mb-5 mb-xl-0">
          <div class="card card-profile shadow">
            <div class="card-body pt-0 pt-md-4">
              <div class="text-center">
                <h3>WORKMOTION CREATIVE</h3>
                <div class="h5 font-weight-300">
                  <i class="ni location_pin mr-2"></i>Bangkok,Thailand
                </div>
                <div class="h5 mt-4">SOFTWARE DEVELOPMENT | JUL 2018 - Present (Full-Time)</div>
                <hr class="my-4" />
                <div class="text-left">
                  <ul>
                    <li>
                      Report the access data from users in the information system of the center.
                    </li>
                    <li>
                      Update the information needed to run a Synze media company (basic information
                      that requires images, videos, and more)
                    </li>
                    <li>
                      The engine to load bit-torrent files using Node.Js technology used in the
                      development
                    </li>
                    <li>
                      Make a web service that works with the server to load torrent files, using
                      Node. Js technology
                    </li>
                  </ul>
                </div>
                <!-- <a href="#">Show more</a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style></style>
