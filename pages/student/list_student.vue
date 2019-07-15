<template>
  <div>
    <v-btn @click="getStudent">TEST</v-btn>
    <table border="1">
      <tr v-for="std in students" :key="std.code">
        <td>{{std.code}}</td>
        <td>{{std.first_name}}</td>
        <td>{{std.last_name}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      code: '',
      fname: '',
      lname: '',
      students: [
         { code: '6201001', first_name: 'fname1', last_name: 'lname1', room: '1/1' },
         { code: '6201002', first_name: 'fname2', last_name: 'lname2', room: '1/1' },
         { code: '6201003', first_name: 'fname3', last_name: 'lname3', room: '1/1' },
      ],
    }
  },
  methods:{
    async getStudent() {
       console.log('getstudent')
      let url = 'http://localhost:7000/student'
      let res = await fetch(url)
      let data = await res.json()
      this.students = data.std
    }
  }
}
  </script>