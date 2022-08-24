import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#3f51b5'
      },
      dark: {
        primary: '#5C6BC0'
      }
    }
  },
});
