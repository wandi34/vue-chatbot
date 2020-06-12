import VueChatBot from './components/BotUI.vue'

const Plugin = {
  install (Vue, options) {
    Vue.component('VueChatBot', VueChatBot)

    if (options) {
      // console.log('options', options)
    }
  }
}

export default Plugin
export { VueChatBot }
