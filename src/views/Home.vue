<template>
  <div class="home">
    <button @click="changeColor()">更改主题颜色为红色</button>
    <button @click="getGeoLocation()">获取地理位置</button>
    <button @click="askForPermission()">请求通知权限</button>
    <button @click="notify()">2秒后弹出一条通知</button>
    <div>经度：{{ state.latitude }}</div>
    <div>纬度：{{ state.longitude }}</div>
    <div>通知：{{ state.notification }}</div>
    <div>当前通知权限：{{ Notification?.permission || state.allowNotification }}</div>
    <div>控制台错误：{{ state.errorMsg }}</div>
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
      errorMsg: '',
      notification: '',
      allowNotification: ''
    })
    function getGeoLocation() {
      navigator.geolocation.getCurrentPosition(function(position) {
        state.latitude = '' + position.coords.latitude;
        state.longitude = '' + position.coords.longitude;
      },function (err){
        alert('定位获取失败！')
        state.errorMsg = '' + err
      });
    }

    function notify() {
      if(!Notification) {
        alert('您的浏览器不支持通知')
      }else if(Notification.permission!=='granted'){
        alert('您拒绝了通知权限')
      } else {
        setTimeout(() => {
          navigator.serviceWorker.ready.then(registration=>{
            registration.showNotification('我是通知的标题',{
              body: '我是通知的内容',
              icon: '../../public/img/icons/favicon-16x16.png'
            })
          })
        },2000)
      }
    }

    function askForPermission() {
      if(!Notification) {
        alert('您的浏览器不支持通知')
      }else if(Notification.permission!=='default') {
          alert(`您已经设置过了通知权限，现在的状态为${Notification.permission}`)
          state.allowNotification = Notification.permission
      }else{
        Notification.requestPermission().then(function (result){
          state.allowNotification = result
        })
      }
    }

    return {
      state,
      getGeoLocation,
      notify,
      askForPermission
    }
  },
  methods: {
    changeColor() {
      document?.querySelector('meta[name="theme-color"]')?.setAttribute('content','#FF0000')
    }
  },
});
</script>
