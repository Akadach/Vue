<template>
  <div>
    username:
    <input type="text" v-model="form.user" />
    pass:
    <input type="text" v-model="form.pass" />
    status:
    <input type="text" v-model="form.status" />
    <v-btn @click="addmember">ADD member</v-btn>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        user: '',
        pass: '',
        status: '',
        id: 12
      }
    };
  },
  methods: {
    async addmember() {
        console.log('ok')
      let res = await fetch("http://localhost:7001/member/", {
        method: "post",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(this.form)
      });
      let data = await res .json();
      console.log('data',data.id)
      this.from.id=data.id
    }
  }
};
</script>