<template>
  <footer class="footer bg-gradient-success px-4">
    <div class="row ml-3 align-items-center justify-content-lg-between">
      <div class="col-lg-6">
        <strong class="head">Contract</strong>
        <div class="copyright text-center text-lg-left text-muted mt-3">
          <p><i class="ni ni-email-83"></i> Email : sarawut.nawawisitkul@gmail.com</p>
          <p><i class="ni ni-mobile-button"></i> Phone : 091-8363922</p>
          <p>
            <i class="fa fa-gitlab"></i> Gitlab :
            <a href="https://gitlab.com/mamochiro">https://gitlab.com/mamochiro</a>
          </p>
          <p>
            <i class="fa fa-github"></i> Github :
            <a href="https://github.com/mamochiro">https://github.com/mamochiro</a>
          </p>
        </div>
      </div>
      <div class="col-lg-6 social">
        <strong class="head">Social</strong>
        <ul class="social clearfix text-center nobull">
          <li>
            <a
              href="https://www.facebook.com/Mark.Sarawut"
              target="_blank"
              class="social-icon facebook"
            >
              Facebook
            </a>
          </li>
          <li>
            <a href="http://line.me/ti/p/mamochiro" target="_blank" class="social-icon line">
              Line
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>
<style lang="scss" scoped>
footer {
  margin-top: 30px;
  color: #fff;
  font-weight: 300;
  p {
    color: #fff;
  }
  .social {
    margin-block-end: auto;
    li {
      float: left;
    }
    .social-icon {
      text-indent: -9999px;
      display: inline-block;
      width: 30px;
      height: 30px;
      margin-right: 5px;
    }
    .line {
      background: url('~assets/svg/line.svg') center center no-repeat;
    }
    .facebook {
      background: url('~assets/svg/facebook-logo-button.svg') center center no-repeat;
    }
  }
  .nobull {
    list-style-type: none;
  }
}
</style>
