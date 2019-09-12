import Vue from 'vue'
import globalComponents from './globalComponents'
import globalDirectives from './globalDirectives'
import SidebarPlugin from '~/components/themetools/SidebarPlugin/index'
import NotificationPlugin from '~/components/themetools//NotificationPlugin/index'

Vue.use(globalComponents)
Vue.use(globalDirectives)
Vue.use(SidebarPlugin)
Vue.use(NotificationPlugin)
