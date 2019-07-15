<template>
    <div>
         <h1>Student {{ $route.params.code }}</h1>
    <button @click="$router.go(-1)">BACK</button>
    </div>
</template>
