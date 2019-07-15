<template>
  <div>
    <h1>Welcome {{ valid }}</h1>
    <div>
      <v-text-field v-model="user" prepend-icon="face" label="User" placeholder="ชื่อผู้ใช้" />
    </div>
    <div>
      Pass: <input v-model="pass">
    </div>
    <div >
      <v-btn color="success"
        
        @click="doLogin" >Login</v-btn>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { 
    user:'',
    pass:''
    }
  }, // end data
  method:{ 
    doLogin(){
      console.log(this.user)
      console.log(this.pass)
      this.$router.replace('/student/6202001')
    }
  }
}
</script>
