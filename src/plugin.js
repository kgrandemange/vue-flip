import Flip from './Flip.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('vue-flip', Flip);
  }
};