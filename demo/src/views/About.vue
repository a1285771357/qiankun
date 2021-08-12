<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <h2>sub2</h2>
      <div id="sss"></div>
    </div>
  </div>
</template>

<script>
import { loadMicroApp } from "qiankun";
export default {
  data() {
    return {
      microApp: null
    }
  },
  mounted() {
    this.microApp = loadMicroApp({
      name: 'sub2',
      entry: '//localhost:4002',
      container: '#sss',
      props: { brand: 'qiankun' },
    });
  },
  updated() {
    this.microApp.update({ name: 'kuitos' });
  },
  beforeDestroy() {
    this.microApp.unmount();
  }
}
</script>
