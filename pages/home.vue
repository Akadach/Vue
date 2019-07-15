<template>
    <div>
        <h1>HELLO CHAIYAPHUM</h1>
        <div>{{text}}</div>
        <label>อายุ :: {{age}} </label>
        <input>NAME::</input><input type="text" :value="dep">
        <input>NAME::</input><input type="text" v-model="dep">
    </div>
</template>
<script>
export default {
    data(){
       return {
           text:'Tanachoti',
           age: 19,
           dep: 'IT',
           }
    }
}
</script>
