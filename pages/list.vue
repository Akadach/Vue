<template>
  <div>
    <h1>HELLO CHAIYAPHUM</h1>
    <div>
      <input type="text" v-model="std_code">
      <h1>Student List</h1>
      <ul>
        <h1>{{students.std_name}}</h1>
        <li v-for="st in students" :key="st.std_code">
          <span>{{ st.cou_unit }}</span>
          <span>{{ st.cou_thai }}</span>
          <span>{{ st.grade }}</span>
        </li>
      </ul>
    </div>
    <div>{{text}}</div>
    <label>อายุ :: {{age}}</label>
    <v-btn color="info" @click="getStudent">show grade</v-btn>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "ALONGKORN",
      age: 24,
      std_code: "",
      students: [
        { std_code: "001", std_name: "name1" },
        { std_code: "002", std_name: "name2" },
        { std_code: "003", std_name: "name3" },
        { std_code: "004", std_name: "name4" }
      ]
    };
  },
  methods: {
    async getStudent() {
      console.log("show grade");
      //this.std_code = std_code;
      console.log("std_code", this.std_code);
      let url = "http://localhost:7001/student/" + this.std_code;
      let res = await fetch(url);
      let data = await res.json();
      this.students = data.student;
    }
  }
};
</script>