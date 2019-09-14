<template>
  <footer class="footer px-4">
    <div class="row align-items-center justify-content-lg-between">
      <!-- <div class="col-lg-6">
        <div class="copyright text-center text-lg-left text-muted">© {{ year }}</div>
      </div>
      <div class="col-lg-6">
        <ul class="nav nav-footer justify-content-center justify-content-lg-end">
          <li class="nav-item">
            <a href="" class="nav-link" target="_blank"></a>
          </li>
          <li class="nav-item"></li>
        </ul>
      </div> -->
      <div class="contact">
        <strong class="head">ติดต่อเรา</strong>
        <div class="contract-info">
          <p>โทรศัพท์ 02-669-8846</p>
          <p>&bull; จันทร์-ศุกร์(10:00 - 18:00 น.)</p>
          <p>&bull; หยุดทำการเสาร์-อาทิตย์และวันหยุดนักขัตฤกษ์</p>
          <p>Email : admin@gmmlive.com</p>
        </div>
        <ul>
          <li>
            <nuxt-link to="/contract/terms-of-service">
              เงื่อนไขการใช้บริการ
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/faqs">
              คำถามที่พบบ่อย
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/payment-information">
              วิธีการชำระเงิน
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/email-newsletter">
              สมัคร/ยกเลิกรับข่าวสาร
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="tel-and-social">
        <strong class="head">โทร</strong>
        <p class="tel">
          02-669-8846
        </p>
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
<style></style>
