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
            <h1 class="display-2 text-white">Hello,I'm Sarawut Nawawisitkul</h1>
            <p class="text-white mt-0 mb-5">
              This is personal website! If You want to know various things About me even more Thank
              You for Reading Me!
            </p>
          </div>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
          <div class="card card-profile shadow">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img :src="imgProfile" class="rounded-circle" />
                  </a>
                </div>
              </div>
            </div>
            <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <!-- <div class="d-flex justify-content-between">
                <base-button size="sm" type="info" class="mr-4">Connect</base-button>
                <base-button size="sm" type="default" class="float-right">Message</base-button>
              </div> -->
            </div>
            <div class="card-body pt-0 pt-md-4 mt-7">
              <div class="text-center">
                <h3>Sarawut Nawawisitkul<span class="font-weight-light">, 24</span></h3>
                <div class="h5 font-weight-300">
                  <i class="ni location_pin mr-2"></i>Narathiwat,Thailand
                </div>
                <!-- <div class="h5 mt-4">Software Developer</div> -->
                <div>
                  <i class="ni ni-hat-3 mt-3 mr-2"></i>PRINCE OF SONGKLA UNIVERSITY, PHUKET CAMPUS
                </div>
                <div class="h5 mt-4">
                  <i class="ni ni-collection mr-2"></i>COLLEGE OF COMPUTING . MAJOR IN SOFTWARE
                  ENGINEERING (2014- 2018)
                </div>
                <!-- <hr class="my-4" /> -->
                <p></p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-8 order-xl-1">
          <card shadow type="secondary">
            <div slot="header" class="bg-white border-0">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">Abount Me</h3>
                </div>
                <div class="col-4 text-right">
                  <!-- <a href="#!" class="btn btn-sm btn-primary">Settings</a> -->
                </div>
              </div>
            </div>
            <template>
              <div class="pl-lg-4">
                <div class="row">
                  <div class="col content">
                    &emsp;&emsp;&emsp;&emsp; Hi, my name is Sarawut Nawawisitkul and I'm a junior
                    software engineer. Welcome to my personal website!
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col content">
                    &emsp;&emsp;&emsp;&emsp; I graduated from Prince of Songkla University Phuket
                    Campus’ within the College of Computing in Software Engineering Program. I
                    looking for a software developer position with software concepts and services,
                    education, skills and skills will be fully utilized to improve the overall
                    efficiency of the company.
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col content">
                    &emsp;&emsp;&emsp;&emsp; Now I have 1 year working experience. I want to find a
                    new, interesting job. I am interested in backend developer work.
                  </div>
                </div>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      model: {
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        zipCode: '',
        about: '',
      },
      imgCover: require('~/assets/img/theme/cover.jpg'),
      imgProfile: require('~/assets/img/theme/profile.jpg'),
    }
  },
}
</script>
<style lang="scss">
.content {
  font-size: 18px;
}
</style>
