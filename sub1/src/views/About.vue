<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div @click="onClick">按钮</div>
    <MicroAppWithMemoHistory name='sub2' entry='//localhost:4002'></MicroAppWithMemoHistory>
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
      microApp: null,
      count: 0
    }
  },
  watch: {
    async count(val) {
      await this.microApp.update({ count: val });
    }
  },
  async mounted() {
    // this.microApp = await loadMicroApp({
    //   name: 'sub2',
    //   entry: '//localhost:4002',
    //   container: '#sss',
    //   props: { mode: 'abstract' },
    // });
    // this.microApp.mountPromise.then(() => {
    //   this.microApp.update({ count: 'kuitos' });
    // })
  },
  beforeDestroy() {
    // this.microApp.unmount();
  },
  methods: {
    onClick() {
      this.count++
      console.log(this.count)
    }
  }
}
</script>
