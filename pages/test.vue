<template>
    <div>
        <h1>Hello{{status}}</h1>
      1.id:  <input type="text" value="id"><br>
      2.status:  <input type="text" :value="status"><br>
      3.status:  <input type="text" v-model="status"><br>
      4.id:  <input type="text" v-model="id"><br>
      <v-btn color="info" @click="doLogin">Login</v-btn>
    </div>
</template>
<script>
export default {
    data() {
    return {
        id: '123456',
        status: 'ok gg',
    }
  },
  methods:{
    doLogin(){
      console.log('ok');
    }
  },
  
  }
</script>

