import Vue from 'vue'
import axios from 'axios'
//import jquery from 'jquery'

Vue.http = axios
Vue.prototype.$http = axios // object ที่เกิดจาก class นี้ จะมี $http ทุกตัว บันนี้ทำให้ this มี this.$http  ใช้งาน
//Vue.prototype.$j = jquery


