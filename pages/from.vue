<template>
  <div>
    <v-container>
      <h1>Register</h1>
    </v-container>
    <v-container>
      <h2>รหัสนักศึกษา</h2>
      <v-flex xs12 sm6 md3>
        <v-text-field label="รหัสนักศึกษา" v-model="std_code"></v-text-field>
      </v-flex>
      <h2>ชื่อ-นามสกุล</h2>
      <v-flex xs12 sm6 md3>
        <v-text-field label="ชื่อ-นามสกุล" v-model="std_name"></v-text-field>
      </v-flex>
      <h2>รหัสวิชา</h2>
      <v-flex xs12 sm6 md3>
        <v-text-field label="รหัสวิชา" v-model="cou_code"></v-text-field>
      </v-flex>
      <h2>วิชา</h2>
      <v-flex xs12 sm6 md3>
        <v-text-field label="วิชา" v-model="cou_thai"></v-text-field>
      </v-flex>
      <h2>หน่วยกิต</h2>
      <v-flex xs12 sm6 md3>
        <v-text-field label="หน่วยกิต" v-model="cou_unit"></v-text-field>
      </v-flex>
      <h2>เกรด</h2>
      <v-flex xs12 sm6 md3>
        <v-text-field label="เกรด" v-model="grade"></v-text-field>
      </v-flex>
      <v-btn color="warning" @click="getStudent">register</v-btn>
    </v-container>
  </div>
</template>
<script>
export default {

};
</script>


