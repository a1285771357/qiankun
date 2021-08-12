import './public-path';
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router-runtime";
import routes from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VueRouter)

let router = null;
let instance = null;
function render(props = {}) {
  const { container, mode } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/sub2/' : '/',
    mode: mode || 'history',
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[sub2]');
}
export async function mount(props) {
  console.log('[sub2] ', props);
  render(props);
  console.log('[sub2] ', instance);
  // instance.$forceUpdate()
}

export async function update(props) {
  console.log('[sub2 update] ', props, instance);
  // instance.$router.push('/')
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
