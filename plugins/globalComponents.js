// import flatPicker from 'vue-flatpickr-component'
// import 'flatpickr/dist/flatpickr.css'
// import 'flatpickr/dist/plugins/confirmDate/confirmDate.css'
// import vSelect from 'vue-select'
import BaseAlert from '~/components/themetools/BaseAlert'
import BaseButton from '~/components/themetools/BaseButton'
import BaseCheckbox from '~/components/themetools/BaseCheckbox'
import BaseInput from '~/components/themetools/BaseInput'
import BaseDropdown from '~/components/themetools/BaseDropdown'
import BaseNav from '~/components/themetools/BaseNav'
import BasePagination from '~/components/themetools/BasePagination'
import BaseProgress from '~/components/themetools/BaseProgress'
import BaseRadio from '~/components/themetools/BaseRadio'
import BaseSlider from '~/components/themetools/BaseSlider'
import BaseSwitch from '~/components/themetools/BaseSwitch'
import BaseTable from '~/components/themetools/BaseTable'
import BaseHeader from '~/components/themetools/BaseHeader'
import Card from '~/components/themetools/Card'
import StatsCard from '~/components/themetools/StatsCard'
import Modal from '~/components/themetools/Modal'
import TabPane from '~/components/themetools/Tabs/TabPane'
import Tabs from '~/components/themetools/Tabs/Tabs'
import Badge from '~/components/themetools/Badge'

export default {
  install(Vue) {
    Vue.component(Badge.name, Badge)
    Vue.component(BaseAlert.name, BaseAlert)
    Vue.component(BaseButton.name, BaseButton)
    Vue.component(BaseInput.name, BaseInput)
    Vue.component(BaseNav.name, BaseNav)
    Vue.component(BaseDropdown.name, BaseDropdown)
    Vue.component(BaseCheckbox.name, BaseCheckbox)
    Vue.component(BasePagination.name, BasePagination)
    Vue.component(BaseProgress.name, BaseProgress)
    Vue.component(BaseRadio.name, BaseRadio)
    Vue.component(BaseSlider.name, BaseSlider)
    Vue.component(BaseSwitch.name, BaseSwitch)
    Vue.component(BaseTable.name, BaseTable)
    Vue.component(BaseHeader.name, BaseHeader)
    Vue.component(Card.name, Card)
    Vue.component(StatsCard.name, StatsCard)
    Vue.component(Modal.name, Modal)
    Vue.component(TabPane.name, TabPane)
    Vue.component(Tabs.name, Tabs)
    // Vue.component('flatPicker', flatPicker)
    // Vue.component('v-select', vSelect)
  },
}
