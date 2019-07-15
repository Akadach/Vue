<template>
  <div>
    <v-flex xs12 sm6 md3>
      <v-text-field label="รหัสนักศึกษา" input type="text" v-model="std_code"></v-text-field>

      <v-btn color="warning" @click="getStudent">show grade</v-btn>
    </v-flex>
    <div>
      <v-data-table
        :headers="headers"
        :items="students"
        :search="search"
        hide-actions
        :pagination.sync="pagination"
        class="elevation-1"
      >
        <template v-slot:items="props">
          <td>{{ props.item.cou_code }}</td>
          <td class="text-xs-right">{{ props.item.cou_thai }}</td>
          <td class="text-xs-right">{{ props.item.cou_unit }}</td>
          <td class="text-xs-right">{{ props.item.grade }}</td>
        </template>
      </v-data-table>
      <v-data-table :items="avg_grade">
        <template v-slot:items="props">
          <td></td>
          <td class="text-xs-right"></td>
          <td class="text-xs-right">เกรดเฉลี่ย</td>
          <td class="text-xs-right">{{props.item.total}}</td>
        </template>
      </v-data-table>
      <div class="text-xs-center pt-2">
        <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "ALONGKORN",
      age: 24,
      std_code: "",
      search: "",
      avg_grade: "",
      pagination: {},
      selected: [],
      headers: [
        {
          text: "รหัสวิชา",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "ชื่อวิชา", align: "center", value: "cou_code" },
        { text: "หน่วยกิต", align: "left", value: "cou_unit" },
        { text: "ผลการเรียน", align: "left", value: "grade" }
      ],
      students: [
        {
          cou_thai: "thai",
          cou_code: 159,
          cou_unit: 3,
          grade: 4
        },
        {
          cou_thai: "health and hygeine",
          cou_code: 237,
          cou_unit: 3,
          grade: 4
        },
        {
          cou_thai: "computer science",
          cou_code: 262,
          cou_unit: 3,
          grade: 4
        },
        {
          cou_thai: "Information and communication technology ",
          cou_code: 305,
          cou_unit: 3,
          grade: 4
        },
        {
          cou_thai: "music",
          cou_code: 356,
          cou_unit: 3,
          grade: 4
        },
        {
          cou_thai: "art",
          cou_code: 375,
          cou_unit: 3,
          grade: 4
        },
        {
          cou_thai: "math",
          cou_code: 392,
          cou_unit: 3,
          grade: 4
        },
        {
          cou_thai: "science",
          cou_code: 408,
          cou_unit: 3,
          grade: 4
        },
        {
          cou_thai: "physics",
          cou_code: 452,
          cou_unit: 3,
          grade: 4
        },
        {
          cou_thai: "dance",
          cou_code: 518,
          cou_unit: 3,
          grade: 4
        }
      ]
    };
  },
  computed: {
    pages() {
      if (
        this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      )
        return 0;

      return Math.ceil(
        this.pagination.totalItems / this.pagination.rowsPerPage
      );
    }
  },
  methods: {
    async getStudent() {
      console.log("show grade");
      //this.std_code=std_code
      console.log("std_code", this.std_code);
      let url = "http://localhost:7001/student/" + this.std_code;
      let res = await fetch(url);
      let data = await res.json();
      this.students = data.student;
      this.avg_grade = data.avg_grade;
      console.log("std=>", this.students[0]);
    }
  }
};
</script>