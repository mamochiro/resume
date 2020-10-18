<template>
  <div>
    <base-header
      class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
      :style="`background-size: cover; background-position: center top;`"
    >
      <!-- Mask -->
      <span class="mask bg-gradient-success opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center"></div>
    </base-header>
    <div class="container-fluid mt--7">
      <div class="row">
        <no-ssr>
          <div class="col-12">
            <div class="card card-profile shadow">
              <div class="card-header text-center">
                <h3>My Work Experience</h3>
              </div>
              <div class="card-body pt-0 pt-md-4">
                <timeline>
                  <timeline-title bg-color="#9dd8e0">
                    <div class="text-left">
                      <h3 class="">
                        ROBOWEALH
                      </h3>
                      <div class="h5 mt-4">SOFTWARE ENGINEER</div>
                      <div class="h5 mt-4">MAR 2019 - Present (Full-Time)</div>
                      <div class="text-left mt-4">
                        Currently working in the position of Software Engineer, I work in back-end
                        section, build api platform by GOLang and Node.JS
                        <ul>
                          <li>
                            ROA (Robowealth Open API) Used for trading and investment
                          </li>
                          <li>
                            Build software by microservice concept
                          </li>
                        </ul>
                      </div>
                      <div class="mt-4">
                        <h5>Tools</h5>
                        <div class="row tools">
                          <img class="img p-1" :src="require('~/assets/tools/go.png')" alt="" />
                          <img class="img p-1" :src="require('~/assets/tools/grpc.png')" alt="" />
                          <img class="img p-1" :src="require('~/assets/tools/node.png')" alt="" />
                          <img class="img p-1" :src="require('~/assets/tools/gql.png')" alt="" />
                          <img class="img p-1" :src="require('~/assets/tools/gcp.png')" alt="" />
                          <img class="img p-1" :src="require('~/assets/tools/docker.png')" alt="" />
                          <img
                            class="img p-1"
                            :src="require('~/assets/tools/jenkins.jpeg')"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </timeline-title>
                  <timeline-item>
                    <div class="text-left">
                      <h3>WORKMOTION CREATIVE</h3>
                      <div class="h5 mt-4">SOFTWARE DEVELOPMENT (Web-Backend)</div>
                      <div class="h5 mt-4">JUL 2018 - FEB 2019 (Full-Time)</div>
                      <div class="text-left">
                        <ul>
                          <li>
                            Mother's day website campaign of major cinema
                          </li>
                          <li>
                            Mother's day website campaign of nexcare 3m
                          </li>
                          <li>
                            Tour website
                            <a href="https://www.wevacationcenter.com/"
                              >https://www.wevacationcenter.com/</a
                            >
                          </li>
                          <li>
                            Ecommerce website system
                            <a href="https://www.horizontfood.com/"
                              >https://www.horizontfood.com/</a
                            >
                          </li>
                          <li>
                            Sharp Thailand web dashboard
                          </li>
                          <li>
                            Other ...
                          </li>
                        </ul>
                      </div>
                      <div class="mt-4">
                        <h5>Tools</h5>
                        <div class="row tools">
                          <img class="img p-2" :src="require('~/assets/tools/llv.png')" alt="" />
                          <img class="img p-2" :src="require('~/assets/tools/jquery.png')" alt="" />
                          <img class="img p-2" :src="require('~/assets/tools/node.png')" alt="" />
                          <img class="img p-2" :src="require('~/assets/tools/gql.png')" alt="" />
                          <img class="img p-2" :src="require('~/assets/tools/nuxt.png')" alt="" />
                        </div>
                      </div>
                    </div>
                  </timeline-item>
                  <timeline-item>
                    <div class="">
                      <h3>SPOTON LABORATORIES CO. , LTD</h3>
                      <div class="h5 mt-4">SOFTWARE DEVELOPMENT (Backend & IT-Support)</div>
                      <div class="h5 mt-4">AUG 2017 - DEC 2017 (Internship)</div>
                      <div class="text-left">
                        <ul>
                          <li>
                            Report the access data from users in the information system of the
                            center.
                          </li>
                          <li>
                            Update the information needed to run a Synze media company (basic
                            information that requires images, videos, and more)
                          </li>
                          <li>
                            The engine to load bit-torrent files using Node.Js technology used in
                            the development
                          </li>
                          <li>
                            Make a web service that works with the server to load torrent files,
                            using Node. Js technology
                          </li>
                        </ul>
                      </div>
                      <div class="mt-4">
                        <h5>Tools</h5>
                        <div class="tools">
                          <img class="img p-2" :src="require('~/assets/tools/php.png')" alt="" />
                          <img class="img p-2" :src="require('~/assets/tools/node.png')" alt="" />
                        </div>
                      </div>
                    </div>
                  </timeline-item>
                </timeline>
              </div>
            </div>
          </div>
        </no-ssr>
      </div>
    </div>
  </div>
</template>

<script>
import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'

export default {
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle,
  },
}
</script>

<style lang="scss" scoped>
.tools {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  .img {
    width: 100px;
    height: 100px;
  }
}
</style>
