import Chart from 'chart.js'
import { initGlobalOptions } from '~/components/themetools/Charts/config'
export default {
  mounted() {
    initGlobalOptions(Chart)
  },
}
