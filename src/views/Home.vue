<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="changeColor()">changeColor</button>
    <button @click="getGeoLocation()">获取地理位置</button>
    <div>地理位置：</div>
    <div>经度：{{ state.latitude }}</div>
    <div>纬度：{{ state.longitude }}</div>
    <div>错误：{{ state.errorMsg }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    const state = reactive({
      latitude: '',
      longitude: '',
      errorMsg: ''
    })
    function getGeoLocation() {
      navigator.geolocation.getCurrentPosition(function(position) {
        state.latitude = '' + position.coords.latitude;
        state.longitude = '' + position.coords.longitude;
      },function (err){
        state.errorMsg = '' + err
      });
    }
    return {
      state,
      getGeoLocation
    }
  },
  methods: {
    changeColor() {
      document?.querySelector('meta[name="theme-color"]')?.setAttribute('content','#FF0000')
    }
  },
});
</script>
