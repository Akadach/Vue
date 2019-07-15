<template>
  <div>
    <h1 v-if="ok">Hello {{ name }}</h1>
    <div v-show="ok">{{ upperName }}</div>
    <input type="text" :value="name"><br>
    <input type="text" v-model="name"><br>

     <div>
    <h1>Student List</h1>
    <ul>
      <li v-for="st in students" :key="st.id">
        <span>{{ st.id }}</span>
        <span>{{ st.name }}</span>
      </li>
    </ul>
  </div>

    <v-btn color="success" @click="doSave">SAVE</v-btn>
    <v-btn color="info" @click="addStd">addStd</v-btn>
  </div>
</template>
<script>
import { method } from 'bluebird';
export default {
  data() {
    return { 
        name: "World",
        ok: true,
        students:[
            {id:'001',name:'name1'},
            {id:'002',name:'name2'},
            {id:'003',name:'name3'},
            {id:'004',name:'name4'},
        ]
    }
  },
  computed: {
    upperName() {
      return this.name.toUpperCase()
    }
  }, 
  methods:{
      doSave(){
          console.log('OK');
          this.ok = !this.ok
      },
      addStd(){
        console.log(this.students.length)
        let id = this.students.length
        this.students.push({id ,name:'oak',})
      }
  },
}
</script>
