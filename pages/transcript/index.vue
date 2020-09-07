<template>
  <div>
    <base-header
      class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
      :style="`background-size: cover; background-position: center top;`"
    >
      <!-- Mask -->
      <span class="mask bg-gradient-success opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-12">
            <h1 class="display-2 text-white">My CV And Transcript</h1>
            <p class="text-white mt-0 mb-5">
              <!-- dis -->
            </p>
          </div>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-12">
          <client-only>
            <div class="row">
              <div
                v-for="(image, index) in media"
                :key="index"
                class="col-12 col-md-6 col-lg-6 mb-2"
                style="display: inline-block"
              >
                <div class="card card-profile shadow">
                  <div class="card-header text-center">
                    <h3>{{ image.title }}</h3>
                  </div>
                  <div class="card-body pt-0 pt-md-4 text-center">
                    <img
                      v-lazy="image.src || image.thumb"
                      style="height: 100%; width: 100%; "
                      @click="openGallery(index)"
                    />
                  </div>
                  <div class="card-footer d-flex justify-content-around">
                    <div class="row">
                      <div class="col-4">
                        <base-button type="default" @click="openGallery(index)"
                          ><i class="fa fa-eye"></i> Preview</base-button
                        >
                      </div>
                      <div class="col-4">
                        <a :download="image.title" :href="image.src">
                          <base-button type="primary"> <i class="ni ni-image"></i> JPG</base-button>
                        </a>
                      </div>
                      <div class="col-4">
                        <base-button type="danger" @click="openLink(image.filePDF)">
                          <i class="ni ni-single-copy-04"></i> PDF</base-button
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <light-box
                ref="lightbox"
                :show-caption="false"
                :media="media"
                :show-light-box="true"
              />
            </div>
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      media: [
        {
          // For image
          thumb: require('~/assets/img/profile/cv.jpg'),
          src: require('~/assets/img/profile/cv.jpg'),
          caption: 'caption to display. receive <html> <b>tag</b>', // Optional
          // srcset: '...', // Optional for displaying responsive images
          title: 'CV',
          fileImage: 'cv.jpg',
          filePDF:
            'https://drive.google.com/file/d/1kX9xl4-ntz_RUGzQTr3Es66U8NyRAsSW/view?usp=sharing',
        },
        {
          // For image
          thumb: require('~/assets/img/profile/transcript.jpg'),
          src: require('~/assets/img/profile/transcript.jpg'),
          caption: 'caption to display. receive <html> <b>tag</b>', // Optional
          srcset: require('~/assets/img/profile/transcript.jpg'), // Optional for displaying responsive images
          title: 'Transcript',
          filePDF:
            'https://drive.google.com/file/d/1LBnITZflgfDxGWKBPg1FtL2EFCXyqtJN/view?usp=sharing',
        },
      ],
    }
  },
  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index)
    },
    openLink: src => {
      window.open(src, '_blank')
    },
  },
}
</script>
<style></style>
